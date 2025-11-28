(function () {
  const data = Array.isArray(window.featuredAuthorProfiles)
    ? window.featuredAuthorProfiles
    : [];

  const elements = {
    breadcrumb: document.getElementById("author-breadcrumb"),
    region: document.getElementById("author-region"),
    name: document.getElementById("author-name"),
    subtitle: document.getElementById("author-subtitle"),
    summary: document.getElementById("author-summary"),
    meta: document.getElementById("author-meta"),
    highlights: document.getElementById("author-highlights"),
    sections: document.getElementById("author-sections"),
    works: document.getElementById("author-works"),
    main: document.getElementById("author-profile-main"),
  };

  const urlParams = new URLSearchParams(window.location.search);
  const slugFromQuery = urlParams.get("slug");
  const slugFromDataset = document.body?.dataset?.authorSlug;
  const slugFromPath = (() => {
    const pathname = window.location.pathname || "";
    const fileName = pathname.split("/").pop() || "";
    const nameWithoutExt = fileName.replace(/\.html?$/i, "");
    if (!nameWithoutExt) return "";

    if (nameWithoutExt.startsWith("author-")) {
      return nameWithoutExt.slice("author-".length);
    }

    if (nameWithoutExt !== "author-profile") {
      return nameWithoutExt;
    }

    return "";
  })();
  const fallbackSlug = data.length ? data[0].slug : "";
  const targetSlug = slugFromQuery || slugFromDataset || slugFromPath || fallbackSlug;

  const author = data.find((item) => item.slug === targetSlug);

  if (!author) {
    showFallback();
    return;
  }

  renderHero(author);
  renderSections(author.sections);
  renderWorks(author.worksList);

  function renderHero(item) {
    if (elements.breadcrumb) {
      elements.breadcrumb.innerHTML =
        '<a href="index.html">首页</a> · <a href="authors.html">全球作家索引</a> · ' +
        escapeHtml(item.name);
    }

    if (elements.region) {
      elements.region.textContent = item.regionLabel || "全球作家档案";
    }

    if (elements.name) {
      elements.name.textContent = item.name || "全球作家档案";
    }

    if (item.name) {
      document.title = `${item.name} | 全球作家详情`;
    }

    if (elements.subtitle) {
      const parts = [];
      if (item.englishName) {
        parts.push(item.englishName);
      }
      if (item.flag || item.country) {
        parts.push(`${item.flag || ""} ${item.country || ""}`.trim());
      }
      elements.subtitle.textContent = parts.join(" · ");
    }

    if (elements.summary) {
      elements.summary.textContent = item.summary || "";
    }

    if (elements.meta) {
      elements.meta.innerHTML = "";
      (item.heroMeta || []).forEach((line) => {
        const span = document.createElement("span");
        span.textContent = line;
        elements.meta.appendChild(span);
      });
    }

    if (elements.highlights) {
      elements.highlights.innerHTML = "";
      (item.heroHighlights || []).forEach((highlight) => {
        const li = document.createElement("li");
        li.textContent = highlight;
        elements.highlights.appendChild(li);
      });
    }
  }

  function renderSections(sections = []) {
    if (!elements.sections) {
      return;
    }

    elements.sections.innerHTML = "";
    if (!sections.length) {
      const empty = document.createElement("p");
      empty.textContent = "该作家的详细介绍即将上线，敬请期待。";
      elements.sections.appendChild(empty);
      return;
    }

    sections.forEach((section) => {
      const card = document.createElement("article");
      card.className = "author-profile-card";

      if (section.title) {
        const heading = document.createElement("h2");
        heading.textContent = section.title;
        card.appendChild(heading);
      }

      (section.body || []).forEach((paragraph) => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        card.appendChild(p);
      });

      if (Array.isArray(section.list) && section.list.length) {
        const ul = document.createElement("ul");
        section.list.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          ul.appendChild(li);
        });
        card.appendChild(ul);
      }

      elements.sections.appendChild(card);
    });
  }

  function renderWorks(works = []) {
    if (!elements.works) {
      return;
    }

    elements.works.innerHTML = "";

    if (!works.length) {
      const empty = document.createElement("p");
      empty.textContent = "该作家的作品索引正在整理中。";
      elements.works.appendChild(empty);
      return;
    }

    works.forEach((work) => {
      const card = document.createElement("article");
      card.className = "author-work-card";

      if (work.title) {
        const title = document.createElement("h3");
        title.textContent = work.title;
        card.appendChild(title);
      }

      if (work.description) {
        const p = document.createElement("p");
        p.textContent = work.description;
        card.appendChild(p);
      }

      elements.works.appendChild(card);
    });
  }

  function showFallback() {
    if (elements.name) {
      elements.name.textContent = "未找到对应的作家";
    }
    if (elements.summary) {
      elements.summary.textContent = "请返回全球作家索引重新选择。";
    }
    if (elements.highlights) {
      elements.highlights.innerHTML = "";
    }
    if (elements.sections) {
      elements.sections.innerHTML = "";
    }
    if (elements.works) {
      elements.works.innerHTML = "";
    }
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
})();
