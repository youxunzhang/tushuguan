const fs = require('fs');
const path = require('path');
const { cityLibraryPages } = require('./city-library-pages-data');

const outputDir = __dirname;

const styleBlock = `
  <style>
    body {
      font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
      background: #f8fafc;
      color: #0f172a;
      margin: 0;
    }
    a { color: #2563eb; }
    .city-wrapper { max-width: 1040px; margin: 0 auto; padding: 4rem 1.25rem 3rem; }
    .city-crumbs { color: #6b7280; font-size: 0.95rem; margin-bottom: 1rem; }
    .city-hero { background: linear-gradient(135deg, #2563eb, #4f46e5); color: #fff; border-radius: 18px; padding: 2rem 1.6rem; box-shadow: 0 16px 40px rgba(37, 99, 235, 0.18); }
    .city-hero h1 { margin: 0 0 0.35rem; font-size: clamp(1.9rem, 3vw, 2.6rem); }
    .city-hero p { margin: 0 0 1rem; line-height: 1.7; }
    .city-meta { display: flex; flex-wrap: wrap; gap: 0.6rem; margin: 1rem 0 0; }
    .city-meta span { background: rgba(255,255,255,0.14); padding: 0.55rem 0.8rem; border-radius: 12px; font-weight: 600; display: inline-flex; align-items: center; gap: 0.35rem; }
    .section-title { margin: 2.25rem 0 0.75rem; font-size: 1.5rem; }
    .section-lede { color: #475569; margin: 0 0 1.25rem; line-height: 1.8; }
    .library-card { background: #fff; border-radius: 16px; padding: 1.2rem 1.3rem; margin-bottom: 1rem; box-shadow: 0 12px 32px rgba(15,23,42,0.08); border: 1px solid rgba(37,99,235,0.08); }
    .library-card h2 { margin: 0 0 0.35rem; }
    .library-card p { margin: 0.25rem 0; color: #475569; line-height: 1.6; }
    .pill-row { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.5rem; }
    .pill { background: #eff6ff; color: #1d4ed8; padding: 0.35rem 0.65rem; border-radius: 999px; font-size: 0.92rem; }
    .faq { background: #fff; border-radius: 16px; padding: 1.2rem 1.3rem; box-shadow: 0 10px 28px rgba(15,23,42,0.06); border: 1px solid rgba(148,163,184,0.25); }
    .faq h3 { margin-top: 0; }
    .faq p { margin: 0 0 0.9rem; color: #475569; line-height: 1.7; }
    .faq p:last-child { margin-bottom: 0; }
    .cta-row { display: flex; flex-wrap: wrap; gap: 0.75rem; margin: 1.2rem 0 0; }
    .cta-link { display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.6rem 1rem; border-radius: 12px; text-decoration: none; font-weight: 700; color: #2563eb; background: rgba(37,99,235,0.08); border: 1px solid rgba(37,99,235,0.15); }
    .cta-link.secondary { background: #fff; color: #111827; }
    @media (max-width: 720px) { .city-wrapper { padding-top: 3.25rem; } .city-hero { padding: 1.5rem 1.25rem; } }
  </style>
`;

const renderLibraries = (libraries, citySlug) =>
  libraries
    .map(
      (library, index) => `
      <article class="library-card" id="${library.id || `${citySlug}-lib-${index + 1}`}">
        <h2>${library.name}</h2>
        <p><strong>地址：</strong>${library.address}</p>
        <p><strong>开放时间：</strong>${library.hours}</p>
        <p><strong>自习与预约：</strong>${library.study}</p>
        <p><strong>交通：</strong>${library.transit}</p>
        <div class="pill-row">${(library.highlights || [])
          .map((item) => `<span class="pill">${item}</span>`)
          .join('')}</div>
      </article>`
    )
    .join('\n');

const renderFaq = (faqItems) =>
  faqItems
    .map(
      (item) => `
      <h3>${item.q}</h3>
      <p>${item.a}</p>`
    )
    .join('\n');

const buildStructuredData = (city) => {
  const faqItems = city.faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a }
  }));

  const itemList = city.libraries.map((library, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `https://www.tushuguan.online/city-${city.slug}-libraries.html#${library.id || `${city.slug}-lib-${index + 1}`}`
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.tushuguan.online/' },
          { '@type': 'ListItem', position: 2, name: `${city.name}图书馆大全`, item: `https://www.tushuguan.online/city-${city.slug}-libraries.html` }
        ]
      },
      { '@type': 'ItemList', name: `${city.name}图书馆清单`, itemListElement: itemList },
      { '@type': 'FAQPage', mainEntity: faqItems }
    ]
  };
};

const renderCityPage = (city) => {
  const structuredData = JSON.stringify(buildStructuredData(city));
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${city.title}</title>
  <meta name="description" content="${city.description}">
  <link rel="stylesheet" href="style.css">
${styleBlock}
  <script type="application/ld+json">${structuredData}</script>
</head>
<body>
  <div class="city-wrapper">
    <div class="city-crumbs">首页 / ${city.name}图书馆大全</div>
    <header class="city-hero">
      <h1>${city.title}</h1>
      <p>${city.description}</p>
      <div class="city-meta">
        ${city.stats.map((item) => `<span>📌 ${item}</span>`).join('')}
      </div>
    </header>

    <section>
      <h2 class="section-title">${city.name}重点图书馆</h2>
      <p class="section-lede">精选公共馆与高校馆的开放时间、交通、自习体验与特色馆藏，方便自习党、亲子家庭和研究者快速决策。</p>
      ${renderLibraries(city.libraries, city.slug)}
    </section>

    <section>
      <h2 class="section-title">${city.name}图书馆常见问题</h2>
      <p class="section-lede">覆盖“图书馆能自习吗”“开放时间”“如何办借书证”等高频搜索问题，长尾需求一次解决。</p>
      <div class="faq">${renderFaq(city.faq)}</div>
    </section>

    <div class="cta-row">
      <a class="cta-link" href="cities.html">🔍 浏览全国城市图书馆</a>
      <a class="cta-link secondary" href="index.html">🏠 返回首页</a>
    </div>
  </div>
</body>
</html>`;
};

cityLibraryPages.forEach((city) => {
  const html = renderCityPage(city);
  const outputFile = path.join(outputDir, `city-${city.slug}-libraries.html`);
  fs.writeFileSync(outputFile, html, 'utf8');
  console.log(`✅ Created ${outputFile}`);
});
