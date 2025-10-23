(function () {
  const quickHints = {
    libraries: "例如：北京 自习室 / 24小时开放",
    bookstores: "例如：广州 文化沙龙 / 24小时书店",
    books: "例如：信息素养 / 亲子阅读 / 古籍保护"
  };

  const LIBRARIES_PER_PAGE = 12;
  const FEATURED_LIBRARY_LIMIT = 100;

  const cityToRegionMap = {
    北京: "华北",
    上海: "华东",
    广州: "华南",
    深圳: "华南",
    杭州: "华东",
    南京: "华东",
    成都: "西南",
    武汉: "华中",
    西安: "西北",
    重庆: "西南"
  };

  const regionOrder = ["华北", "华东", "华南", "华中", "西南", "西北"];

  const regionDisplayNames = {
    华北: "华北地区",
    华东: "华东地区",
    华南: "华南地区",
    华中: "华中地区",
    西南: "西南地区",
    西北: "西北地区"
  };

  function toArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function escapeHtml(text = "") {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function buildLibraryRecords() {
    if (typeof window.libraryData !== "object" || window.libraryData === null) {
      return [];
    }

    const entries = [];
    Object.entries(window.libraryData).forEach(([city, libraries]) => {
      libraries.forEach((library) => {
        const description = library.description || "";
        const address = library.address || "";
        const phone = library.phone || "";
        const website = library.website || "";
        entries.push({
          ...library,
          city,
          address,
          phone,
          website,
          description,
          searchText: `${library.name || ""} ${city} ${description} ${address} ${phone} ${website}`.toLowerCase()
        });
      });
    });
    return entries;
  }

  function buildBookstoreRecords() {
    const stores = toArray(window.bookstoresData);
    return stores.map((store) => {
      const highlights = toArray(store.highlights).join(" ");
      const description = store.description || "";
      const address = store.address || "";
      const phone = store.phone || "";
      const website = store.website || "";
      return {
        ...store,
        highlights: toArray(store.highlights),
        searchText: `${store.name || ""} ${store.city || ""} ${description} ${highlights} ${address} ${phone} ${website}`.toLowerCase()
      };
    });
  }

  function buildBookRecords() {
    const books = toArray(window.booksData);
    return books.map((book) => {
      const tags = toArray(book.tags).join(" ");
      const summary = book.summary || "";
      const publisher = book.publisher || "";
      const isbn = book.isbn || "";
      const callNumber = book.callNumber || "";
      return {
        ...book,
        tags: toArray(book.tags),
        searchText: `${book.title || ""} ${book.author || ""} ${book.category || ""} ${tags} ${summary} ${publisher} ${isbn} ${callNumber}`.toLowerCase()
      };
    });
  }

  function updateTextContent(id, value) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  }

  function filterByTerm(records, term, predicate) {
    const normalizedTerm = term.trim().toLowerCase();
    if (!normalizedTerm) {
      return records.slice();
    }
    return records.filter((record) => {
      if (typeof predicate === "function") {
        return predicate(record, normalizedTerm);
      }
      return record.searchText.includes(normalizedTerm);
    });
  }

  function renderList(container, items, renderer, emptyMessage) {
    if (!container) {
      return;
    }
    if (!items.length) {
      container.innerHTML = `<div class="empty-state">${escapeHtml(emptyMessage)}</div>`;
      return;
    }
    container.innerHTML = items.map(renderer).join("");
  }

  function createLibraryCard(library) {
    const websiteLink = library.website
      ? `<li>🔗 <a href="${escapeHtml(library.website)}" target="_blank" rel="noopener">访问官网</a></li>`
      : "";
    const phoneLine = library.phone ? `<li>☎️ ${escapeHtml(library.phone)}</li>` : "";
    return `
      <article class="info-card">
        <div class="card-header">
          <h3>${escapeHtml(library.name)}</h3>
          <span class="tag">📍 ${escapeHtml(library.city)}</span>
        </div>
        <p>${escapeHtml(library.description)}</p>
        <ul>
          <li>📍 ${escapeHtml(library.address)}</li>
          ${phoneLine}
          ${websiteLink}
        </ul>
      </article>
    `;
  }

  function createBookstoreCard(store) {
    const hoursLine = store.hours ? `<li>🕘 ${escapeHtml(store.hours)}</li>` : "";
    const phoneLine = store.phone ? `<li>☎️ ${escapeHtml(store.phone)}</li>` : "";
    const websiteLink = store.website
      ? `<li>🔗 <a href="${escapeHtml(store.website)}" target="_blank" rel="noopener">访问官网</a></li>`
      : "";
    const highlights = store.highlights.length
      ? `<div class="tag-list">${store.highlights
          .slice(0, 3)
          .map((item) => `<span class="tag">#${escapeHtml(item)}</span>`)
          .join(" ")}</div>`
      : "";
    return `
      <article class="info-card">
        <div class="card-header">
          <h3>${escapeHtml(store.name)}</h3>
          <span class="tag">🏙️ ${escapeHtml(store.city)}</span>
        </div>
        <p>${escapeHtml(store.description)}</p>
        ${highlights}
        <ul>
          <li>📍 ${escapeHtml(store.address)}</li>
          ${hoursLine}
          ${phoneLine}
          ${websiteLink}
        </ul>
      </article>
    `;
  }

  function createBookCard(book) {
    const category = book.category || "推荐书籍";
    const tags = book.tags.length
      ? `<div class="tag-list">${book.tags
          .slice(0, 4)
          .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
          .join(" ")}</div>`
      : "";
    const infoLines = [
      book.author ? `👤 作者：${escapeHtml(book.author)}` : "",
      book.publisher ? `🏢 出版社：${escapeHtml(book.publisher)} (${escapeHtml(book.year || "")})` : "",
      book.callNumber ? `📚 索书号：${escapeHtml(book.callNumber)}` : "",
      book.isbn ? `🆔 ISBN：${escapeHtml(book.isbn)}` : "",
      book.availability ? `📍 馆藏地：${escapeHtml(book.availability)}` : ""
    ].filter(Boolean);
    return `
      <article class="info-card">
        <div class="card-header">
          <h3>${escapeHtml(book.title)}</h3>
          <span class="tag">${escapeHtml(category)}</span>
       </div>
        ${tags}
        <p>${escapeHtml(book.summary)}</p>
        <ul>
          ${infoLines.map((line) => `<li>${line}</li>`).join("")}
        </ul>
      </article>
    `;
  }

  function renderFeaturedLibrarySection(libraries) {
    const container = document.getElementById("featured-library-groups");
    const counter = document.getElementById("featured-library-count");

    if (!container) {
      return;
    }

    const classified = libraries
      .map((library) => {
        const region = cityToRegionMap[library.city];
        if (!region) {
          return null;
        }
        return { ...library, region };
      })
      .filter(Boolean)
      .sort((a, b) => {
        const regionIndexA = regionOrder.indexOf(a.region);
        const regionIndexB = regionOrder.indexOf(b.region);
        if (regionIndexA !== regionIndexB) {
          const orderA = regionIndexA === -1 ? Number.MAX_SAFE_INTEGER : regionIndexA;
          const orderB = regionIndexB === -1 ? Number.MAX_SAFE_INTEGER : regionIndexB;
          return orderA - orderB;
        }

        const cityCompare = a.city.localeCompare(b.city, "zh-Hans-CN");
        if (cityCompare !== 0) {
          return cityCompare;
        }

        return a.name.localeCompare(b.name, "zh-Hans-CN");
      });

    const regionBuckets = new Map();
    classified.forEach((library) => {
      if (!regionBuckets.has(library.region)) {
        regionBuckets.set(library.region, []);
      }
      regionBuckets.get(library.region).push(library);
    });

    const orderedBuckets = regionOrder
      .map((region) => {
        const items = regionBuckets.get(region);
        return {
          region,
          items: Array.isArray(items) ? items.slice() : []
        };
      })
      .filter((bucket) => bucket.items.length);

    let totalCount = orderedBuckets.reduce(
      (sum, bucket) => sum + bucket.items.length,
      0
    );

    while (totalCount > FEATURED_LIBRARY_LIMIT) {
      const targetBucket = orderedBuckets.reduce((largest, bucket) => {
        if (bucket.items.length <= 1) {
          return largest;
        }
        if (!largest || bucket.items.length > largest.items.length) {
          return bucket;
        }
        return largest;
      }, null);

      if (!targetBucket) {
        break;
      }

      targetBucket.items.pop();
      totalCount -= 1;
    }

    if (counter) {
      counter.textContent = String(totalCount);
    }

    if (!totalCount) {
      container.innerHTML = '<div class="empty-state">暂未找到可展示的图书馆信息。</div>';
      return;
    }

    const html = orderedBuckets
      .map((bucket) => {
        const { region } = bucket;
        const librariesInRegion = bucket.items;
        const items = librariesInRegion
          .map((library) => {
            const phoneLine = library.phone
              ? `<p class="featured-library__meta">☎️ ${escapeHtml(library.phone)}</p>`
              : "";
            const websiteLine = library.website
              ? `<p class="featured-library__meta">🔗 <a href="${escapeHtml(
                  library.website
                )}" target="_blank" rel="noopener">访问官网</a></p>`
              : "";

            return `
              <li class="featured-library">
                <div class="featured-library__title">
                  <h4>${escapeHtml(library.name)}</h4>
                  <span>${escapeHtml(library.city)}</span>
                </div>
                <p class="featured-library__meta">📍 ${escapeHtml(library.address)}</p>
                ${phoneLine}
                ${websiteLine}
              </li>
            `;
          })
          .join("");

        const regionTitle = regionDisplayNames[region] || `${region}地区`;

        return `
          <article class="region-card">
            <div class="region-card__header">
              <h3>${escapeHtml(regionTitle)}</h3>
              <span class="region-card__badge">${librariesInRegion.length} 家</span>
            </div>
            <ul class="featured-library-list">
              ${items}
            </ul>
          </article>
        `;
      })
      .join("");

    container.innerHTML = html;
  }

  function ready() {
    const libraries = buildLibraryRecords();
    const bookstores = buildBookstoreRecords();
    const books = buildBookRecords();

    renderFeaturedLibrarySection(libraries);

    updateTextContent("total-library-count", libraries.length);
    updateTextContent("total-bookstore-count", bookstores.length);
    updateTextContent("total-book-count", books.length);

    const librarySearchInput = document.getElementById("library-search-input");
    const libraryCityFilter = document.getElementById("library-city-filter");
    const libraryResults = document.getElementById("library-results");
    const libraryPagination = document.getElementById("library-pagination");

    let libraryCurrentPage = 1;
    let libraryFilteredResults = libraries.slice();
    let libraryTotalPages = Math.max(
      1,
      Math.ceil(libraryFilteredResults.length / LIBRARIES_PER_PAGE)
    );

    const bookstoreSearchInput = document.getElementById("bookstore-search-input");
    const bookstoreCityFilter = document.getElementById("bookstore-city-filter");
    const bookstoreResults = document.getElementById("bookstore-results");

    const bookSearchInput = document.getElementById("book-search-input");
    const bookCategoryFilter = document.getElementById("book-category-filter");
    const bookResults = document.getElementById("book-results");

    if (libraryCityFilter) {
      const cityOptions = Array.from(
        new Set(libraries.map((library) => library.city))
      ).sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
      cityOptions.forEach((city) => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        libraryCityFilter.appendChild(option);
      });
    }

    if (bookstoreCityFilter) {
      const storeCities = Array.from(
        new Set(bookstores.map((store) => store.city))
      ).sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
      storeCities.forEach((city) => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        bookstoreCityFilter.appendChild(option);
      });
    }

    if (bookCategoryFilter) {
      const categories = Array.from(
        new Set(books.map((book) => book.category))
      ).sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        bookCategoryFilter.appendChild(option);
      });
    }

    function updateLibraryPagination(totalItems) {
      if (!libraryPagination) {
        return;
      }

      const totalPages = Math.ceil(totalItems / LIBRARIES_PER_PAGE);
      libraryTotalPages = totalPages || 1;

      if (totalPages <= 1) {
        libraryPagination.innerHTML = "";
        libraryPagination.setAttribute("hidden", "");
        return;
      }

      libraryPagination.removeAttribute("hidden");

      const parts = [];
      parts.push(
        `<button type="button" class="pagination-btn prev" data-page="prev"${
          libraryCurrentPage === 1 ? " disabled" : ""
        }>上一页</button>`
      );

      for (let i = 1; i <= totalPages; i += 1) {
        const isActive = i === libraryCurrentPage ? " active" : "";
        parts.push(
          `<button type="button" class="pagination-btn number${isActive}" data-page="${i}">${i}</button>`
        );
      }

      parts.push(
        `<button type="button" class="pagination-btn next" data-page="next"${
          libraryCurrentPage === totalPages ? " disabled" : ""
        }>下一页</button>`
      );

      libraryPagination.innerHTML = parts.join("");
    }

    const internationalCities = new Set([
      "纽约",
      "伦敦",
      "巴黎",
      "东京",
      "新加坡",
      "悉尼",
      "多伦多"
    ]);

    function applyLibraryFilters(options = {}) {
      const { resetPage = false } = options;
      const term = librarySearchInput ? librarySearchInput.value : "";
      const city = libraryCityFilter ? libraryCityFilter.value : "";

      libraryFilteredResults = filterByTerm(libraries, term).filter((library) => {
        return !city || library.city === city;
      });

      const hasTerm = term.trim().length > 0;
      const hasCity = Boolean(city);

      if (!hasTerm && !hasCity) {
        libraryFilteredResults = libraryFilteredResults.filter((library) => {
          return !internationalCities.has(library.city);
        });
      }

      updateTextContent("library-results-count", libraryFilteredResults.length);

      if (resetPage) {
        libraryCurrentPage = 1;
      }

      const totalPages = Math.ceil(
        libraryFilteredResults.length / LIBRARIES_PER_PAGE
      );

      if (!libraryFilteredResults.length) {
        libraryCurrentPage = 1;
      } else if (libraryCurrentPage > totalPages) {
        libraryCurrentPage = totalPages;
      }

      const startIndex = (libraryCurrentPage - 1) * LIBRARIES_PER_PAGE;
      const pageItems = libraryFilteredResults.slice(
        startIndex,
        startIndex + LIBRARIES_PER_PAGE
      );

      renderList(
        libraryResults,
        pageItems,
        createLibraryCard,
        "暂未找到匹配的图书馆信息，请尝试更换关键词或城市。"
      );

      updateLibraryPagination(libraryFilteredResults.length);

      return libraryFilteredResults;
    }

    if (libraryPagination) {
      libraryPagination.addEventListener("click", (event) => {
        const button = event.target.closest("button[data-page]");
        if (!button || button.disabled) {
          return;
        }

        const page = button.dataset.page;
        if (page === "prev") {
          if (libraryCurrentPage > 1) {
            libraryCurrentPage -= 1;
            applyLibraryFilters();
          }
          return;
        }

        if (page === "next") {
          if (libraryCurrentPage < libraryTotalPages) {
            libraryCurrentPage += 1;
            applyLibraryFilters();
          }
          return;
        }

        const targetPage = Number(page);
        if (
          Number.isInteger(targetPage) &&
          targetPage >= 1 &&
          targetPage <= libraryTotalPages &&
          targetPage !== libraryCurrentPage
        ) {
          libraryCurrentPage = targetPage;
          applyLibraryFilters();
        }
      });
    }

    function applyBookstoreFilters() {
      const term = bookstoreSearchInput ? bookstoreSearchInput.value : "";
      const city = bookstoreCityFilter ? bookstoreCityFilter.value : "";
      const filtered = filterByTerm(bookstores, term).filter((store) => {
        return !city || store.city === city;
      });
      updateTextContent("bookstore-results-count", filtered.length);
      renderList(
        bookstoreResults,
        filtered.slice(0, 9),
        createBookstoreCard,
        "暂未找到匹配的书店，试试调整城市或关键词。"
      );
      return filtered;
    }

    function applyBookFilters() {
      const term = bookSearchInput ? bookSearchInput.value : "";
      const category = bookCategoryFilter ? bookCategoryFilter.value : "";
      const filtered = filterByTerm(books, term).filter((book) => {
        return !category || book.category === category;
      });
      updateTextContent("book-results-count", filtered.length);
      renderList(
        bookResults,
        filtered.slice(0, 9),
        createBookCard,
        "暂未找到匹配的书籍，建议更换主题或关键字。"
      );
      return filtered;
    }

    if (librarySearchInput) {
      librarySearchInput.addEventListener("input", () =>
        applyLibraryFilters({ resetPage: true })
      );
    }
    if (libraryCityFilter) {
      libraryCityFilter.addEventListener("change", () =>
        applyLibraryFilters({ resetPage: true })
      );
    }

    if (bookstoreSearchInput) {
      bookstoreSearchInput.addEventListener("input", applyBookstoreFilters);
    }
    if (bookstoreCityFilter) {
      bookstoreCityFilter.addEventListener("change", applyBookstoreFilters);
    }

    if (bookSearchInput) {
      bookSearchInput.addEventListener("input", applyBookFilters);
    }
    if (bookCategoryFilter) {
      bookCategoryFilter.addEventListener("change", applyBookFilters);
    }

    applyLibraryFilters({ resetPage: true });
    applyBookstoreFilters();
    applyBookFilters();

    const quickTabs = document.querySelectorAll(".quick-tab");
    const quickInput = document.getElementById("quick-search-input");
    const quickResults = document.getElementById("quick-search-results");
    const quickHint = document.getElementById("quick-search-hint");
    let quickTarget = "libraries";

    function setQuickTarget(target) {
      quickTarget = target;
      quickTabs.forEach((tab) => {
        const isActive = tab.dataset.target === target;
        tab.classList.toggle("active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
      });
      if (quickHint) {
        quickHint.textContent = quickHints[target] || quickHints.libraries;
      }
      runQuickSearch();
    }

    function runQuickSearch() {
      if (!quickResults) {
        return;
      }
      const term = quickInput ? quickInput.value.trim() : "";
      if (!term) {
        quickResults.innerHTML = '<p class="quick-placeholder">开始输入后将即时展示前三条匹配结果。</p>';
        return;
      }

      const dataset = quickTarget === "libraries" ? libraries : quickTarget === "bookstores" ? bookstores : books;
      const filtered = filterByTerm(dataset, term).slice(0, 3);

      if (!filtered.length) {
        quickResults.innerHTML = '<p class="quick-placeholder">没有找到匹配结果，换个关键词试试。</p>';
        return;
      }

      quickResults.innerHTML = filtered
        .map((item) => {
          if (quickTarget === "libraries") {
            return `
              <div class="quick-result-item" role="button" tabindex="0" data-type="libraries" data-term="${escapeHtml(
                item.name
              )}" data-city="${escapeHtml(item.city)}">
                <div class="quick-result-title">${escapeHtml(item.name)}</div>
                <p class="quick-result-meta">${escapeHtml(item.city)} · ${escapeHtml(item.address)}</p>
              </div>
            `;
          }
          if (quickTarget === "bookstores") {
            const highlightText = item.highlights.slice(0, 2).join(" · ") || item.address || item.city;
            return `
              <div class="quick-result-item" role="button" tabindex="0" data-type="bookstores" data-term="${escapeHtml(
                item.name
              )}" data-city="${escapeHtml(item.city)}">
                <div class="quick-result-title">${escapeHtml(item.name)}</div>
                <p class="quick-result-meta">${escapeHtml(item.city)} · ${escapeHtml(highlightText)}</p>
              </div>
            `;
          }
          const bookCategory = item.category || "推荐书籍";
          return `
            <div class="quick-result-item" role="button" tabindex="0" data-type="books" data-term="${escapeHtml(
              item.title
            )}" data-category="${escapeHtml(bookCategory)}">
              <div class="quick-result-title">${escapeHtml(item.title)}</div>
              <p class="quick-result-meta">${escapeHtml(item.author || "")}${item.author ? " · " : ""}${escapeHtml(
            bookCategory
          )}</p>
            </div>
          `;
        })
        .join("");
    }

    function handleQuickActivate(element) {
      if (!element) {
        return;
      }
      const type = element.dataset.type;
      const term = element.dataset.term || "";
      if (type === "libraries") {
        if (librarySearchInput) {
          librarySearchInput.value = term;
        }
        if (libraryCityFilter && element.dataset.city) {
          libraryCityFilter.value = element.dataset.city;
        }
        applyLibraryFilters({ resetPage: true });
        document.getElementById("libraries")?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (type === "bookstores") {
        if (bookstoreSearchInput) {
          bookstoreSearchInput.value = term;
        }
        if (bookstoreCityFilter && element.dataset.city) {
          bookstoreCityFilter.value = element.dataset.city;
        }
        applyBookstoreFilters();
        document.getElementById("bookstores")?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (type === "books") {
        if (bookSearchInput) {
          bookSearchInput.value = term;
        }
        if (bookCategoryFilter && element.dataset.category) {
          bookCategoryFilter.value = element.dataset.category;
        }
        applyBookFilters();
        document.getElementById("books")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    quickTabs.forEach((tab) => {
      tab.addEventListener("click", () => setQuickTarget(tab.dataset.target || "libraries"));
    });

    if (quickInput) {
      quickInput.addEventListener("input", runQuickSearch);
    }

    if (quickResults) {
      quickResults.addEventListener("click", (event) => {
        const target = event.target.closest(".quick-result-item");
        if (target) {
          handleQuickActivate(target);
        }
      });

      quickResults.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          const target = event.target.closest(".quick-result-item");
          if (target) {
            event.preventDefault();
            handleQuickActivate(target);
          }
        }
      });
    }

    const mobileToggle = document.getElementById("mobile-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener("click", () => {
        const isHidden = mobileMenu.hasAttribute("hidden");
        if (isHidden) {
          mobileMenu.removeAttribute("hidden");
        } else {
          mobileMenu.setAttribute("hidden", "");
        }
        mobileToggle.setAttribute("aria-expanded", String(isHidden));
      });

      mobileMenu.addEventListener("click", (event) => {
        if (event.target.classList.contains("mobile-nav-link")) {
          mobileMenu.setAttribute("hidden", "");
          mobileToggle.setAttribute("aria-expanded", "false");
        }
      });
    }

    setQuickTarget("libraries");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
})();
