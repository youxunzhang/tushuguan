const booksUrl = "/data/books.json";
const ageSections = document.getElementById("age-sections");
const filterForm = document.getElementById("age-filter");
const ageSelect = document.getElementById("age-select");

const groups = [
  { id: "3-6", label: "3–6 岁", description: "适合亲子共读与启蒙阅读。" },
  { id: "7-9", label: "7–9 岁", description: "培养独立阅读兴趣与探索欲。" },
  { id: "10-12", label: "10–12 岁", description: "提升阅读专注与知识拓展。" },
  { id: "teen", label: "青少年", description: "关注成长主题与学科阅读。" },
  { id: "adult", label: "成人", description: "重建阅读习惯与自我提升。" }
];

const ensureMinimum = (list, fallback, count) => {
  const result = [...list];
  let index = 0;
  while (result.length < count && index < fallback.length) {
    const candidate = fallback[index];
    if (!result.find((book) => book.id === candidate.id)) {
      result.push(candidate);
    }
    index += 1;
  }
  return result;
};

const applyFilter = (value) => {
  const sections = ageSections.querySelectorAll(".age-card");
  sections.forEach((section) => {
    const matches = value === "all" || section.dataset.age === value;
    section.classList.toggle("hidden", !matches);
  });

  if (value !== "all") {
    const target = ageSections.querySelector(`[data-age=\"${value}\"]`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};

fetch(booksUrl)
  .then((response) => response.json())
  .then((data) => {
    const books = Array.isArray(data) ? data : [];
    const starter = books.filter((book) => book.tags.includes("starter"));

    groups.forEach((group) => {
      const groupBooks = books.filter((book) => book.age_range === group.id);
      const filledBooks = ensureMinimum(groupBooks, starter, 3).slice(0, 5);

      const section = document.createElement("article");
      section.className = "age-card";
      section.dataset.age = group.id;
      section.innerHTML = `
        <h2>${group.label}</h2>
        <p>${group.description}</p>
        <div class="book-grid"></div>
      `;

      const grid = section.querySelector(".book-grid");
      filledBooks.forEach((book) => {
        const item = document.createElement("div");
        item.className = "book-item";
        item.innerHTML = `
          <h3>${book.title}</h3>
          <p>${book.why}</p>
          <span>${book.tags.slice(0, 2).join(" / ")}</span>
        `;
        grid.appendChild(item);
      });

      ageSections.appendChild(section);
    });

    if (filterForm) {
      filterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        applyFilter(ageSelect.value);
      });
    }
  });
