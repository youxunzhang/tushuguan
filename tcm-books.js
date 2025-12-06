(function () {
  function toArray(value) {
    if (Array.isArray(value)) {
      return value.filter(Boolean);
    }
    if (typeof value === 'string' && value.trim()) {
      return value
        .split(/[,，]/)
        .map((item) => item.trim())
        .filter(Boolean);
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

  function buildBooks() {
    const source = Array.isArray(globalThis.tcmBooksData) ? globalThis.tcmBooksData : [];
    return source.map((book) => {
      const tags = toArray(book.tags);
      const summary = book.summary || '';
      const category = book.category || '中医读本';
      const era = book.era || '佚名时代';
      return {
        ...book,
        tags,
        category,
        era,
        searchText: `${book.title || ''} ${book.author || ''} ${category} ${era} ${tags.join(' ')} ${summary}`.toLowerCase()
      };
    });
  }

  function createBookCard(book) {
    const tags = book.tags.length
      ? `<div class="book-card-tags">${book.tags
          .map((tag) => `<span>${escapeHtml(tag)}</span>`)
          .join('')}</div>`
      : '';

    return `
      <article class="book-card">
        <div class="book-card-header">
          <h3>${escapeHtml(book.title)}</h3>
          <span class="book-card-category">${escapeHtml(book.category)}</span>
        </div>
        <p class="book-card-summary">${escapeHtml(book.summary)}</p>
        <ul class="book-card-meta">
          ${[
            book.author ? `👤 作者：${escapeHtml(book.author)}` : '',
            book.era ? `🕰️ 时期：${escapeHtml(book.era)}` : '',
            book.tags.length ? `🏷️ 关键词：${book.tags.map((tag) => escapeHtml(tag)).join(' / ')}` : ''
          ]
            .filter(Boolean)
            .map((line) => `<li>${line}</li>`)
            .join('')}
        </ul>
        ${tags}
      </article>
    `;
  }

  function renderBooks(container, books) {
    if (!container) return;
    container.innerHTML = books.map(createBookCard).join('');
  }

  function populateSelect(select, options) {
    if (!select) return;
    select.innerHTML = '';
    options.forEach(({ value, label }) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = label;
      select.appendChild(option);
    });
  }

  function renderTagCloud(container, items, onSelect) {
    if (!container) return;
    container.innerHTML = items
      .map((item) => `<button class="books-tag" type="button" data-value="${escapeHtml(item)}">${escapeHtml(item)}</button>`)
      .join('');

    container.addEventListener('click', (event) => {
      const target = event.target.closest('button[data-value]');
      if (!target) return;
      onSelect(target.dataset.value || '');
    });
  }

  function ready() {
    const books = buildBooks();
    const totalCountNode = document.getElementById('tcm-total-count');
    const categoryCountNode = document.getElementById('tcm-category-count');
    const eraCountNode = document.getElementById('tcm-era-count');
    const visibleCountNode = document.getElementById('tcm-visible-count');
    const searchInput = document.getElementById('tcm-search');
    const categorySelect = document.getElementById('tcm-category');
    const eraSelect = document.getElementById('tcm-era');
    const grid = document.getElementById('tcm-books-grid');
    const emptyState = document.getElementById('tcm-empty-state');
    const tagCloud = document.getElementById('tcm-tag-cloud');

    if (!grid) return;

    const categories = Array.from(new Set(books.map((book) => book.category).filter(Boolean))).sort((a, b) =>
      a.localeCompare(b, 'zh-Hans-CN')
    );
    const eras = Array.from(new Set(books.map((book) => book.era).filter(Boolean))).sort((a, b) =>
      a.localeCompare(b, 'zh-Hans-CN')
    );

    if (totalCountNode) totalCountNode.textContent = String(books.length);
    if (categoryCountNode) categoryCountNode.textContent = String(categories.length);
    if (eraCountNode) eraCountNode.textContent = String(eras.length);

    populateSelect(
      categorySelect,
      [{ value: '', label: '全部主题' }].concat(categories.map((category) => ({ value: category, label: category })))
    );

    populateSelect(
      eraSelect,
      [{ value: '', label: '全部时期' }].concat(eras.map((era) => ({ value: era, label: era })))
    );

    renderTagCloud(tagCloud, categories.slice(0, 12), (category) => {
      if (categorySelect) {
        categorySelect.value = category;
      }
      state.category = category;
      applyFilter();
      if (categorySelect) categorySelect.focus();
    });

    const state = { keyword: '', category: '', era: '' };

    function applyFilter() {
      const filtered = books.filter((book) => {
        if (state.category && book.category !== state.category) return false;
        if (state.era && book.era !== state.era) return false;
        if (!state.keyword) return true;
        return book.searchText.includes(state.keyword);
      });

      if (visibleCountNode) visibleCountNode.textContent = String(filtered.length);
      if (emptyState) emptyState.classList.toggle('hidden', filtered.length > 0);
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

    if (eraSelect) {
      eraSelect.addEventListener('change', (event) => {
        state.era = event.target.value;
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
