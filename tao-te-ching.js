import { TaoTeChing } from './tao-te-ching-data.js';

document.addEventListener('DOMContentLoaded', () => {
  const tocList = document.querySelector('#tao-toc');
  const chaptersContainer = document.querySelector('#tao-chapter-list');
  const searchInput = document.querySelector('#tao-search-input');
  const resetButton = document.querySelector('#tao-reset-btn');
  const randomButton = document.querySelector('#tao-random-btn');
  const chapterTotal = document.querySelector('#tao-chapter-total');
  const searchSummary = document.querySelector('#tao-search-summary');

  if (!tocList || !chaptersContainer) {
    return;
  }

  const chapters = TaoTeChing.map((chapter) => {
    const keyword = [chapter.title, ...chapter.verses].join(' ');
    return {
      ...chapter,
      keyword,
      keywordLower: keyword.toLowerCase()
    };
  });

  chapterTotal?.textContent = `${chapters.length}`;

  const scrollToChapter = (chapterId) => {
    const target = document.querySelector(`#chapter-${chapterId}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.classList.add('tao-chapter-highlight');
      setTimeout(() => target.classList.remove('tao-chapter-highlight'), 1200);
    }
  };

  const buildTOC = (data) => {
    const fragment = document.createDocumentFragment();
    data.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'tao-toc-item';

      const link = document.createElement('button');
      link.type = 'button';
      link.className = 'tao-toc-link';
      link.textContent = `第${item.chapter}章 · ${item.title}`;
      link.setAttribute('data-chapter', item.chapter);
      li.appendChild(link);
      fragment.appendChild(li);
    });

    tocList.innerHTML = '';
    tocList.appendChild(fragment);
  };

  const highlightMatches = (text, query) => {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'gi');
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
  };

  const renderChapters = (data, query = '') => {
    const fragment = document.createDocumentFragment();

    data.forEach((chapter) => {
      const article = document.createElement('article');
      article.className = 'tao-chapter-card';
      article.id = `chapter-${chapter.chapter}`;

      const heading = document.createElement('h3');
      heading.className = 'tao-chapter-title';
      heading.innerHTML = `第${chapter.chapter}章 · ${highlightMatches(chapter.title, query)}`;
      article.appendChild(heading);

      const versesContainer = document.createElement('div');
      versesContainer.className = 'tao-verses';

      chapter.verses.forEach((line) => {
        const p = document.createElement('p');
        p.className = 'tao-verse';
        p.innerHTML = highlightMatches(line, query);
        versesContainer.appendChild(p);
      });

      article.appendChild(versesContainer);
      fragment.appendChild(article);
    });

    chaptersContainer.innerHTML = '';
    chaptersContainer.appendChild(fragment);

    const resultText = query
      ? `找到 ${data.length} / ${chapters.length} 章匹配 “${query}”`
      : `共收录 ${chapters.length} 章道德经原文`;
    if (searchSummary) {
      searchSummary.textContent = resultText;
    }
  };

  const applyFilter = () => {
    const query = searchInput.value.trim();
    const queryLower = query.toLowerCase();
    const filtered = query
      ? chapters.filter((chapter) => chapter.keywordLower.includes(queryLower))
      : chapters;

    chapterTotal?.textContent = `${filtered.length}`;
    buildTOC(filtered);
    renderChapters(filtered, query);
  };

  tocList.addEventListener('click', (event) => {
    const button = event.target.closest('.tao-toc-link');
    if (!button) return;
    const chapterId = button.getAttribute('data-chapter');
    scrollToChapter(chapterId);
  });

  searchInput.addEventListener('input', () => {
    applyFilter();
  });

  resetButton?.addEventListener('click', () => {
    searchInput.value = '';
    applyFilter();
    searchInput.focus();
  });

  randomButton?.addEventListener('click', () => {
    const randomChapter = chapters[Math.floor(Math.random() * chapters.length)];
    searchInput.value = '';
    applyFilter();
    scrollToChapter(randomChapter.chapter);
  });

  renderChapters(chapters);
  buildTOC(chapters);
});
