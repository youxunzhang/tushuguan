document.addEventListener('DOMContentLoaded', () => {
  if (typeof bookstoresData === 'undefined') {
    return;
  }

  const listContainer = document.getElementById('bookstore-list');
  if (!listContainer) {
    return;
  }

  const totalElement = document.getElementById('bookstore-total');
  const searchInput = document.getElementById('bookstore-search');
  const cityFilter = document.getElementById('bookstore-city-filter');

  const cityOptions = [...new Set(bookstoresData.map(store => store.city))].sort((a, b) => a.localeCompare(b, 'zh-Hans-CN'));
  if (cityFilter) {
    cityOptions.forEach(city => {
      const option = document.createElement('option');
      option.value = city;
      option.textContent = city;
      cityFilter.appendChild(option);
    });
  }

  function renderList(data) {
    if (totalElement) {
      totalElement.textContent = data.length;
    }

    if (!data.length) {
      listContainer.innerHTML = '<div class="empty-state">暂无符合条件的书店，试着调整筛选条件。</div>';
      return;
    }

    listContainer.innerHTML = data.map(store => `
      <article class="bookstore-card">
        <header class="bookstore-card-header">
          <div>
            <h3 class="bookstore-name">${store.name}</h3>
            <p class="bookstore-city">${store.city} · ${store.established}</p>
          </div>
          <a class="bookstore-detail-link" href="bookstore-${store.slug}.html">查看详情</a>
        </header>
        <p class="bookstore-description">${store.description}</p>
        <ul class="bookstore-meta">
          <li><span class="meta-icon">📍</span>${store.address}</li>
          <li><span class="meta-icon">🕒</span>${store.hours}</li>
          <li><span class="meta-icon">☎️</span>${store.phone}</li>
          <li><span class="meta-icon">🌐</span><a href="${store.website}" target="_blank" rel="noopener">访问官网</a></li>
        </ul>
        <div class="bookstore-tags">
          ${store.highlights.map(tag => `<span class="bookstore-tag">${tag}</span>`).join('')}
        </div>
      </article>
    `).join('');
  }

  function applyFilters() {
    const keyword = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const selectedCity = cityFilter ? cityFilter.value : '';

    const filtered = bookstoresData.filter(store => {
      const keywordMatch = !keyword ||
        store.name.toLowerCase().includes(keyword) ||
        store.city.toLowerCase().includes(keyword) ||
        store.description.toLowerCase().includes(keyword);
      const cityMatch = !selectedCity || store.city === selectedCity;
      return keywordMatch && cityMatch;
    });

    renderList(filtered);
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  if (cityFilter) {
    cityFilter.addEventListener('change', applyFilters);
  }

  renderList(bookstoresData);
});
