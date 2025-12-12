(function () {
  function toArray(value) {
    if (Array.isArray(value)) {
      return value;
    }
    if (typeof value === 'string' && value.trim()) {
      return value.split(/[,，]/).map((item) => item.trim()).filter(Boolean);
    }
    return [];
  }

  function escapeHtml(value) {
    if (value === null || value === undefined) {
      return '';
    }
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function buildTopBooks() {
    const source = Array.isArray(globalThis.topBooksData) ? globalThis.topBooksData : [];
    return source.map((book, index) => ({
      title: book.title || `热销图书 ${index + 1}`,
      author: book.author || '畅销作者',
      highlight: book.highlight || '',
      rank: index + 1
    }));
  }

  function buildBooks() {
    const source = Array.isArray(globalThis.booksData) ? globalThis.booksData : [];
    return source.map((book) => {
      const tags = toArray(book.tags);
      const summary = book.summary || '';
      const availability = book.availability || '';
      return {
        ...book,
        tags,
        summary,
        availability,
        searchText: `${book.title || ''} ${book.author || ''} ${book.category || ''} ${tags.join(' ')} ${summary} ${availability}`.toLowerCase()
      };
    });
  }

  function createBookCard(book) {
    const tags = book.tags.length
      ? `<div class="book-card-tags">${book.tags
          .map((tag) => `<span>${escapeHtml(tag)}</span>`)
          .join('')}</div>`
      : '';
    const infoLines = [
      book.author ? `👤 作者：${escapeHtml(book.author)}` : '',
      book.publisher ? `🏢 出版社：${escapeHtml(book.publisher)} (${escapeHtml(book.year || '')})` : '',
      book.callNumber ? `📚 索书号：${escapeHtml(book.callNumber)}` : '',
      book.isbn ? `🆔 ISBN：${escapeHtml(book.isbn)}` : '',
      book.availability ? `📍 馆藏地：${escapeHtml(book.availability)}` : ''
    ].filter(Boolean);
    return `
      <article class="book-card">
        <div class="book-card-header">
          <h3>${escapeHtml(book.title)}</h3>
          <span class="book-card-category">${escapeHtml(book.category || '图书推荐')}</span>
        </div>
        ${tags}
        <p class="book-card-summary">${escapeHtml(book.summary)}</p>
        <ul class="book-card-meta">
          ${infoLines.map((line) => `<li>${line}</li>`).join('')}
        </ul>
      </article>
    `;
  }

  function createTopBookCard(book) {
    const highlight = book.highlight
      ? `<p class="top-book-subtitle">${escapeHtml(book.highlight)}</p>`
      : '';
    return `
      <article class="top-book-card">
        <div class="top-book-rank">#${book.rank}</div>
        <div class="top-book-info">
          <h3>${escapeHtml(book.title)}</h3>
          <p class="top-book-author">${escapeHtml(book.author)}</p>
          ${highlight}
        </div>
      </article>
    `;
  }

  function renderBooks(container, books) {
    if (!container) {
      return;
    }
    if (!books.length) {
      container.innerHTML = '';
      return;
    }
    container.innerHTML = books.map(createBookCard).join('');
  }

  function renderTopBooks(container, books) {
    if (!container) {
      return;
    }
    container.innerHTML = books.map(createTopBookCard).join('');
  }

  function populateSelect(select, options) {
    if (!select) {
      return;
    }
    select.innerHTML = '';
    options.forEach(({ value, label }) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = label;
      select.appendChild(option);
    });
  }

  function renderCategoryTags(container, categories, onSelect) {
    if (!container) {
      return;
    }
    container.innerHTML = categories
      .map((category) => `<button type="button" class="books-tag" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`)
      .join('');

    container.addEventListener('click', (event) => {
      const target = event.target.closest('button[data-category]');
      if (!target) {
        return;
      }
      const category = target.dataset.category || '';
      onSelect(category);
    });
  }

  function ready() {
    const books = buildBooks();
    const totalCountNode = document.getElementById('books-total-count');
    const themeCountNode = document.getElementById('books-theme-count');
    const latestYearNode = document.getElementById('books-latest-year');
    const visibleCountNode = document.getElementById('books-visible-count');
    const searchInput = document.getElementById('books-search');
    const categorySelect = document.getElementById('books-category');
    const yearSelect = document.getElementById('books-year');
    const grid = document.getElementById('books-grid');
    const emptyState = document.getElementById('books-empty-state');
    const categoryTags = document.getElementById('books-category-tags');
    const topBooksGrid = document.getElementById('top-books-grid');
    const topBooks = buildTopBooks();

    if (!grid) {
      return;
    }

    renderTopBooks(topBooksGrid, topBooks);

    const categories = Array.from(new Set(books.map((book) => book.category).filter(Boolean))).sort((a, b) =>
      a.localeCompare(b, 'zh-Hans-CN')
    );
    const years = Array.from(new Set(books.map((book) => book.year).filter(Boolean))).sort((a, b) => b - a);

    if (totalCountNode) {
      totalCountNode.textContent = String(books.length);
    }
    if (themeCountNode) {
      themeCountNode.textContent = String(categories.length);
    }
    if (latestYearNode) {
      latestYearNode.textContent = years.length ? String(years[0]) : '-';
    }

    populateSelect(categorySelect, [{ value: '', label: '全部主题' }].concat(categories.map((category) => ({
      value: category,
      label: category
    }))));

    populateSelect(yearSelect, [{ value: '', label: '全部年份' }].concat(years.map((year) => ({
      value: String(year),
      label: String(year)
    }))));

    renderCategoryTags(categoryTags, categories, (category) => {
      if (categorySelect) {
        categorySelect.value = category;
      }
      state.category = category;
      applyFilter();
      if (categorySelect) {
        categorySelect.focus();
      }
    });

    const state = {
      keyword: '',
      category: '',
      year: ''
    };

    function applyFilter() {
      const filtered = books.filter((book) => {
        if (state.category && book.category !== state.category) {
          return false;
        }
        if (state.year && String(book.year) !== state.year) {
          return false;
        }
        if (!state.keyword) {
          return true;
        }
        return book.searchText.includes(state.keyword);
      });

      if (visibleCountNode) {
        visibleCountNode.textContent = String(filtered.length);
      }

      if (emptyState) {
        emptyState.classList.toggle('hidden', filtered.length > 0);
      }

      renderBooks(grid, filtered);
    }

    if (searchInput) {
      searchInput.addEventListener('input', (event) => {
        state.keyword = event.target.value.trim().toLowerCase();
        applyFilter();
      });
    }

    if (categorySelect) {
      categorySelect.addEventListener('change', (event) => {
        state.category = event.target.value;
        applyFilter();
      });
    }

    if (yearSelect) {
      yearSelect.addEventListener('change', (event) => {
        state.year = event.target.value;
        applyFilter();
      });
    }

    renderBooks(grid, books);
    applyFilter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    ready();
  }
})();
