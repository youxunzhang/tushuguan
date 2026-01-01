const booksUrl = "/data/books.json";

const form = document.getElementById("recommend-form");
const resultList = document.getElementById("result-list");
const resultsSubtitle = document.getElementById("results-subtitle");

const goalTagMap = {
  亲子共读: ["亲子", "启蒙"],
  提升专注: ["专注", "效率"],
  文学入门: ["文学", "经典"],
  情绪疗愈: ["情绪", "疗愈"],
  职场提升: ["职场", "成长"],
  科普探索: ["科学", "探索"],
  自我成长: ["成长"]
};

const keywordTagMap = [
  { keyword: "科幻", tags: ["科学", "探索"] },
  { keyword: "推理", tags: ["推理"] },
  { keyword: "历史", tags: ["历史"] },
  { keyword: "情绪", tags: ["情绪"] },
  { keyword: "成长", tags: ["成长"] },
  { keyword: "亲子", tags: ["亲子"] },
  { keyword: "文学", tags: ["文学", "经典"] },
  { keyword: "效率", tags: ["效率"] }
];

const state = {
  books: []
};

const getParams = () => new URLSearchParams(window.location.search);

const getTargetTags = (readingGoal, recentBook) => {
  const tags = new Set();
  if (readingGoal && goalTagMap[readingGoal]) {
    goalTagMap[readingGoal].forEach((tag) => tags.add(tag));
  }
  if (recentBook) {
    keywordTagMap.forEach(({ keyword, tags: mappedTags }) => {
      if (recentBook.includes(keyword)) {
        mappedTags.forEach((tag) => tags.add(tag));
      }
    });
  }
  return Array.from(tags);
};

const collectRecommendations = ({ age, readingGoal, recentBook }) => {
  const hasInput = Boolean(age || readingGoal || recentBook);
  const targetTags = getTargetTags(readingGoal, recentBook);
  const results = [];
  const seen = new Set();

  const addList = (list) => {
    list.forEach((item) => {
      if (!seen.has(item.id)) {
        results.push(item);
        seen.add(item.id);
      }
    });
  };

  const starter = state.books.filter((book) => book.tags.includes("starter"));
  const ageMatches = age ? state.books.filter((book) => book.age_range === age) : [];
  const tagMatches = targetTags.length
    ? state.books.filter((book) => book.tags.some((tag) => targetTags.includes(tag)))
    : [];
  const strictMatches = age && targetTags.length
    ? state.books.filter(
        (book) =>
          book.age_range === age &&
          book.tags.some((tag) => targetTags.includes(tag))
      )
    : [];

  if (!hasInput) {
    addList(starter);
    addList(state.books);
  } else {
    addList(strictMatches);
    addList(ageMatches);
    addList(tagMatches);
    addList(starter);
    addList(state.books);
  }

  return results.slice(0, 5);
};

const renderResults = (list, contextText) => {
  resultList.innerHTML = "";

  list.forEach((book) => {
    const card = document.createElement("article");
    card.className = "result-card";

    const tags = book.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    card.innerHTML = `
      <h3>${book.title}</h3>
      <div class="tag-list">${tags}</div>
      <p>${book.why}</p>
    `;

    resultList.appendChild(card);
  });

  resultsSubtitle.textContent = contextText;
};

const handleSubmit = (event) => {
  event.preventDefault();
  const age = form.age.value.trim();
  const recentBook = form.recent_book.value.trim();
  const readingGoal = form.reading_goal.value.trim();

  const list = collectRecommendations({ age, readingGoal, recentBook });
  const contextText = age || readingGoal || recentBook
    ? "根据你的输入生成了以下推荐："
    : "你还没有输入内容，这里是新手通用阅读书单：";

  renderResults(list, contextText);
};

const fillFromQuery = () => {
  const params = getParams();
  if (params.has("age")) {
    form.age.value = params.get("age");
  }
  if (params.has("recent_book")) {
    form.recent_book.value = params.get("recent_book");
  }
  if (params.has("reading_goal")) {
    form.reading_goal.value = params.get("reading_goal");
  }
};

fetch(booksUrl)
  .then((response) => response.json())
  .then((data) => {
    state.books = Array.isArray(data) ? data : [];
    fillFromQuery();
    const hasQuery = Array.from(getParams().values()).some((value) => value.trim() !== "");
    if (hasQuery) {
      handleSubmit(new Event("submit"));
    }
  });

form.addEventListener("submit", handleSubmit);
