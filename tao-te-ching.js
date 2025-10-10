import { TaoTeChing } from './tao-te-ching-data.js';
import { TaoTeChingTranslations } from './tao-te-ching-translations.js';

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

  const MAX_CHAPTER = 64;

  const chapters = TaoTeChing.filter((chapter) => chapter.chapter <= MAX_CHAPTER).map((chapter) => {
    const normalizedVerses = (chapter.verses || []).map((verse) => {
      if (typeof verse === 'string') {
        return { text: verse, pinyin: '' };
      }
      return {
        text: verse.text,
        pinyin: verse.pinyin ?? ''
      };
    });

    const translations = TaoTeChingTranslations[chapter.chapter] ?? {
      en: '',
      de: '',
      es: ''
    };

    const keywordParts = [
      chapter.title,
      chapter.titlePinyin ?? '',
      ...normalizedVerses.flatMap((verse) => [verse.text, verse.pinyin]),
      translations.en,
      translations.de,
      translations.es
    ];
    const keyword = keywordParts.join(' ');

    return {
      ...chapter,
      titlePinyin: chapter.titlePinyin ?? '',
      verses: normalizedVerses,
      translations,
      keyword,
      keywordLower: keyword.toLowerCase()
    };
  });

  let filteredChapters = [...chapters];
  let activeChapter = filteredChapters[0] ?? null;

  chapterTotal?.textContent = `${filteredChapters.length}`;

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
      if (activeChapter && activeChapter.chapter === item.chapter) {
        link.classList.add('active');
      }
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

  const renderChapterDetail = (chapter, query = '') => {
    if (!chaptersContainer) {
      return;
    }

    chaptersContainer.innerHTML = '';

    if (!chapter) {
      const emptyState = document.createElement('p');
      emptyState.className = 'tao-empty-state';
      emptyState.textContent = '未找到符合条件的章节，请尝试其他关键词。';
      chaptersContainer.appendChild(emptyState);
      return;
    }

    const article = document.createElement('article');
    article.className = 'tao-chapter-card tao-chapter-card--single';
    article.id = `chapter-${chapter.chapter}`;

    const heading = document.createElement('h3');
    heading.className = 'tao-chapter-title';
    heading.innerHTML = `第${chapter.chapter}章 · ${highlightMatches(chapter.title, query)}`;
    article.appendChild(heading);

    if (chapter.titlePinyin) {
      const headingPinyin = document.createElement('p');
      headingPinyin.className = 'tao-chapter-pinyin';
      headingPinyin.innerHTML = highlightMatches(chapter.titlePinyin, query);
      article.appendChild(headingPinyin);
    }

    const versesSection = document.createElement('div');
    versesSection.className = 'tao-original-section';

    const versesHeading = document.createElement('h4');
    versesHeading.className = 'tao-section-title';
    versesHeading.textContent = '原文';
    versesSection.appendChild(versesHeading);

    const versesContainer = document.createElement('div');
    versesContainer.className = 'tao-verses';

    chapter.verses.forEach((verse) => {
      const block = document.createElement('div');
      block.className = 'tao-verse';

      const textLine = document.createElement('p');
      textLine.className = 'tao-verse-text';
      textLine.innerHTML = highlightMatches(verse.text, query);
      block.appendChild(textLine);

      if (verse.pinyin) {
        const pinyinLine = document.createElement('p');
        pinyinLine.className = 'tao-verse-pinyin';
        pinyinLine.innerHTML = highlightMatches(verse.pinyin, query);
        block.appendChild(pinyinLine);
      }

      versesContainer.appendChild(block);
    });

    versesSection.appendChild(versesContainer);
    article.appendChild(versesSection);

    const translationsSection = document.createElement('div');
    translationsSection.className = 'tao-translations';

    const translationsHeading = document.createElement('h4');
    translationsHeading.className = 'tao-section-title';
    translationsHeading.textContent = '多语言翻译';
    translationsSection.appendChild(translationsHeading);

    const translationList = document.createElement('div');
    translationList.className = 'tao-translation-grid';

    const translationMeta = [
      { key: 'en', label: 'English' },
      { key: 'de', label: 'Deutsch' },
      { key: 'es', label: 'Español' }
    ];

    translationMeta.forEach(({ key, label }) => {
      const card = document.createElement('article');
      card.className = 'tao-translation-card';

      const title = document.createElement('h5');
      title.className = 'tao-translation-title';
      title.textContent = label;
      card.appendChild(title);

      const body = document.createElement('p');
      body.className = 'tao-translation-text';
      body.innerHTML = highlightMatches(chapter.translations[key] ?? '', query);
      card.appendChild(body);

      translationList.appendChild(card);
    });

    translationsSection.appendChild(translationList);
    article.appendChild(translationsSection);

    chaptersContainer.appendChild(article);
  };

  const applyFilter = () => {
    const query = searchInput.value.trim();
    const queryLower = query.toLowerCase();
    filteredChapters = query
      ? chapters.filter((chapter) => chapter.keywordLower.includes(queryLower))
      : chapters;

    if (!filteredChapters.includes(activeChapter)) {
      activeChapter = filteredChapters[0] ?? null;
    }

    chapterTotal?.textContent = `${filteredChapters.length}`;

    const resultText = query
      ? `找到 ${filteredChapters.length} / ${chapters.length} 章匹配 “${query}”`
      : `共收录 ${chapters.length} 章道德经原文`;
    if (searchSummary) {
      searchSummary.textContent = resultText;
    }

    buildTOC(filteredChapters);
    renderChapterDetail(activeChapter, query);
  };

  tocList.addEventListener('click', (event) => {
    const button = event.target.closest('.tao-toc-link');
    if (!button) return;
    const chapterId = button.getAttribute('data-chapter');
    const chapter = chapters.find((item) => `${item.chapter}` === chapterId);
    if (chapter) {
      activeChapter = chapter;
      buildTOC(filteredChapters);
      renderChapterDetail(activeChapter, searchInput.value.trim());
    }
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
    const source = filteredChapters.length ? filteredChapters : chapters;
    const randomChapter = source[Math.floor(Math.random() * source.length)];
    searchInput.value = '';
    applyFilter();
    activeChapter = randomChapter;
    buildTOC(filteredChapters);
    renderChapterDetail(activeChapter, '');
  });

  buildTOC(filteredChapters);
  renderChapterDetail(activeChapter);
});
