(function () {
  const quickHints = {
    libraries: "例如：北京 自习室 / 24小时开放",
    bookstores: "例如：广州 文化沙龙 / 24小时书店",
    books: "例如：信息素养 / 亲子阅读 / 古籍保护"
  };

  const featuredAuthors = Array.isArray(window.featuredAuthorProfiles)
    ? window.featuredAuthorProfiles
    : [];


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

  const tieredLibraryGroups = [
    {
      id: "tier-1",
      label: "一线城市",
      caption: "覆盖北上广深等一线城市核心馆舍",
      items: [
        {
          city: "北京",
          name: "国家图书馆",
          intro: "国家级综合图书馆，古籍特藏与数字资源齐备。",
          address: "北京市海淀区中关村南大街33号",
          services: "国图讲堂 · 国家级古籍修复中心",
          metro: "地铁4号线/9号线国家图书馆站",
          website: "http://www.nlc.cn/",
          highlights: ["国家馆藏", "古籍文献", "数字国图"]
        },
        {
          city: "北京",
          name: "首都图书馆",
          intro: "北京市民文化服务中心，空间宽敞且活动频繁。",
          address: "北京市朝阳区东三环南路88号",
          services: "城市书房网络 · 智能借还设备",
          metro: "地铁10号线/14号线十里河站",
          website: "http://www.clcn.net.cn/",
          highlights: ["首都文化", "全民阅读", "多语种馆藏"]
        },
        {
          city: "上海",
          name: "上海图书馆",
          intro: "华东地区枢纽型公共馆，与东馆联动提供全龄服务。",
          address: "上海市徐汇区淮海中路1555号",
          services: "东馆新馆联动 · 自主学习空间",
          metro: "地铁10号线上海图书馆站",
          website: "https://www.library.sh.cn/",
          highlights: ["国际交流", "创新体验", "智慧借阅"]
        },
        {
          city: "上海",
          name: "复旦大学图书馆",
          intro: "百年学府的研究型图书馆，学科情报服务完备。",
          address: "上海市杨浦区邯郸路220号",
          services: "复旦学术情报 · 研讨室预约",
          metro: "地铁10号线江湾体育场站",
          website: "https://www.library.fudan.edu.cn/",
          highlights: ["学术资源", "复旦特色", "研讨空间"]
        },
        {
          city: "广州",
          name: "广州图书馆",
          intro: "珠江新城地标建筑，夜景与阅读空间交织。",
          address: "广州市珠江东路4号",
          services: "24小时自助图书馆 · 珠江夜读平台",
          metro: "APM线/3号线珠江新城站",
          website: "https://www.gzlib.org.cn/",
          highlights: ["岭南文化", "智能馆舍", "亲子阅读"]
        },
        {
          city: "广州",
          name: "中山大学图书馆",
          intro: "岭南学术重镇的核心文献信息中心。",
          address: "广州市海珠区新港西路135号",
          services: "岭南文献馆 · 学术研究支持",
          metro: "地铁8号线中大站",
          website: "https://library.sysu.edu.cn/",
          highlights: ["岭南典藏", "学术服务", "开放学习"]
        },
        {
          city: "深圳",
          name: "深圳图书馆",
          intro: "改革开放前沿城市的公共文化地标。",
          address: "深圳市福田区福中路2014号",
          services: "音乐厅讲座 · 24小时自助借还",
          metro: "地铁3号线/4号线少年宫站",
          website: "https://www.szlib.org.cn/",
          highlights: ["创新服务", "公共客厅", "城市书房"]
        },
        {
          city: "深圳",
          name: "深圳大学图书馆",
          intro: "南山区校园里的智慧图书馆与学习中心。",
          address: "深圳市南山区南海大道3688号",
          services: "智慧座位预约 · 创客空间",
          metro: "地铁1号线深大站",
          website: "https://lib.szu.edu.cn/",
          highlights: ["校园开放", "智慧座位", "创客空间"]
        },
        {
          city: "深圳",
          name: "南方科技大学图书馆",
          intro: "新型研究型大学的知识与创新枢纽。",
          address: "深圳市南山区学苑大道1088号",
          services: "科创信息服务 · 研究型学习空间",
          metro: "地铁5号线塘朗站",
          website: "https://lib.sustech.edu.cn/",
          highlights: ["科创聚焦", "跨学科", "空间灵活"]
        }
      ]
    },
    {
      id: "tier-2",
      label: "二线城市",
      caption: "囊括杭州、南京、成都、武汉、西安等区域中心城市代表馆",
      items: [
        {
          city: "杭州",
          name: "杭州图书馆",
          intro: "钱塘江畔的城市阅读客厅，兼具景观与服务。",
          address: "杭州市江干区解放东路58号",
          services: "城中书房网络 · 少儿主题馆",
          metro: "地铁4号线江锦路站",
          website: "https://www.hzlib.net/",
          highlights: ["钱塘江畔", "少儿空间", "总分馆联动"]
        },
        {
          city: "杭州",
          name: "浙江大学图书馆",
          intro: "浙大学术研究的核心基地，学科服务体系完善。",
          address: "杭州市西湖区余杭塘路866号",
          services: "学科馆员服务 · 研讨室预约",
          website: "https://libweb.zju.edu.cn/",
          highlights: ["学科服务", "研究支撑", "浙大特色"]
        },
        {
          city: "南京",
          name: "南京图书馆",
          intro: "江苏省级公共馆，古籍善本与地方文献丰富。",
          address: "南京市玄武区中山东路189号",
          services: "江南古籍库 · 24小时自助区",
          website: "https://www.jslib.org.cn/",
          highlights: ["江南古籍", "公共课堂", "智慧服务"]
        },
        {
          city: "南京",
          name: "南京大学图书馆",
          intro: "百年学府的学术资源枢纽，涵盖多学科馆藏。",
          address: "南京市栖霞区仙林大道163号",
          services: "文献传递 · 学术支持",
          website: "https://lib.nju.edu.cn/",
          highlights: ["金陵文脉", "学术传承", "开放学习"]
        },
        {
          city: "成都",
          name: "成都图书馆",
          intro: "天府文化地标，深入社区推动全民阅读。",
          address: "成都市青羊区文翁路98号",
          services: "天府书房 · 城市文化客厅",
          website: "https://www.cdclib.org/",
          highlights: ["天府文化", "城市书房", "读者活动"]
        },
        {
          city: "成都",
          name: "四川大学图书馆",
          intro: "综合性大学图书馆，覆盖医学与理工交叉资源。",
          address: "成都市武侯区望江路29号",
          services: "学科情报服务 · 珍本保护",
          website: "https://lib.scu.edu.cn/",
          highlights: ["川大典藏", "跨学科", "情报服务"]
        },
        {
          city: "武汉",
          name: "武汉图书馆",
          intro: "江城的公共阅读中枢，打造市民文化客厅。",
          address: "武汉市江汉区建设大道861号",
          services: "汉派讲堂 · 24小时自助借阅",
          website: "https://www.whlib.org.cn/",
          highlights: ["江城阅读", "智慧借阅", "文化讲堂"]
        },
        {
          city: "武汉",
          name: "武汉大学图书馆",
          intro: "珞珈山下的百年学术馆，春樱季节最受瞩目。",
          address: "武汉市武昌区珞珈山",
          services: "学科服务中心 · 文献传递",
          website: "https://www.lib.whu.edu.cn/",
          highlights: ["珞珈樱花", "学术资源", "历史建筑"]
        },
        {
          city: "西安",
          name: "陕西省图书馆",
          intro: "十三朝古都的省级公共馆，古籍典藏底蕴深厚。",
          address: "西安市碑林区长安北路18号",
          services: "三秦文献库 · 文献保护中心",
          website: "https://www.sxlib.org.cn/",
          highlights: ["三秦文脉", "古籍修复", "公共教育"]
        }
      ]
    },
    {
      id: "tier-3",
      label: "三线城市",
      caption: "精选新兴城市与沿海地级市的特色公共图书馆",
      items: [
        {
          city: "苏州",
          name: "苏州图书馆",
          intro: "江南水乡气质与现代服务融合的城市公共馆。",
          address: "苏州市姑苏区人民路858号",
          services: "姑苏书房 · 智慧借阅终端",
          website: "http://www.szlib.com/",
          highlights: ["江南文脉", "古城书房", "数字借阅"]
        },
        {
          city: "厦门",
          name: "厦门市图书馆",
          intro: "滨海城市文化艺术中心内的开放式阅读空间。",
          address: "厦门市思明区镇海路文化艺术中心",
          services: "海岛主题书展 · 亲子阅读营",
          website: "https://www.xmglib.cn/",
          highlights: ["滨海地标", "亲子友好", "主题展览"]
        },
        {
          city: "青岛",
          name: "青岛市图书馆",
          intro: "山东半岛公共文化核心，海洋专题馆藏突出。",
          address: "青岛市市南区香港西路26号",
          services: "上合书苑 · 海洋文化主题区",
          website: "http://www.qdlib.com/",
          highlights: ["海洋特色", "国际交流", "读者活动"]
        },
        {
          city: "宁波",
          name: "宁波图书馆新馆",
          intro: "智慧化程度较高的滨海新城图书馆。",
          address: "宁波市鄞州区宁穿路2100号",
          services: "24小时书房 · 全景数字借阅",
          website: "https://www.nblib.cn/",
          highlights: ["智慧馆舍", "城市书房", "数字体验"]
        },
        {
          city: "大连",
          name: "大连市图书馆",
          intro: "东北沿海文化客厅，服务海洋科技与城市生活。",
          address: "大连市沙河口区会展路100号",
          services: "海洋文献特色馆 · 社区推广",
          website: "http://www.dllib.net/",
          highlights: ["海洋文献", "展览沙龙", "社区服务"]
        },
        {
          city: "合肥",
          name: "合肥市图书馆",
          intro: "科创城市的综合型公共图书馆，服务创新人才。",
          address: "合肥市政务区怀宁路与祁门路交口",
          services: "科创资讯服务 · 智慧借阅终端",
          website: "http://www.hflib.org/",
          highlights: ["科创资讯", "市民课堂", "数字化"]
        },
        {
          city: "昆明",
          name: "昆明市图书馆",
          intro: "高原春城的人文阅读空间，民族文化资源丰富。",
          address: "昆明市五华区环城西路1号",
          services: "民族文化专题馆 · 旅行者读书会",
          website: "http://www.kmlib.cn/",
          highlights: ["民族文化", "旅行阅读", "公共课程"]
        },
        {
          city: "福州",
          name: "福州市图书馆",
          intro: "海丝文化重要传承基地，闽都特色活动常态化。",
          address: "福州市鼓楼区乌山路198号",
          services: "闽都文化展厅 · 文献修复体验",
          website: "http://www.fzlib.com.cn/",
          highlights: ["闽都文化", "研学推广", "修复体验"]
        },
        {
          city: "南宁",
          name: "南宁市图书馆",
          intro: "广西首府的智慧图书馆，联通东盟文化资源。",
          address: "南宁市青秀区民族大道61号",
          services: "东盟文献中心 · 市民学堂",
          website: "http://www.nnlib.cn/",
          highlights: ["东盟交流", "智慧服务", "城市学堂"]
        }
      ]
    }
  ];

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

  function createAuthorHighlightCard(author) {
    const tags = toArray(author.tags)
      .slice(0, 3)
      .map((tag) => `<span>${escapeHtml(tag)}</span>`)
      .join("");
    const tagSection = tags
      ? `<div class="author-highlight-tags">${tags}</div>`
      : "";
    const worksLine = author.works
      ? `<p class="author-highlight-body"><strong>代表作：</strong>${escapeHtml(author.works)}</p>`
      : "";
    const accolade = author.accolade ? ` · ${escapeHtml(author.accolade)}` : "";
    const detailLink = author.slug
      ? `author-profile.html?slug=${encodeURIComponent(author.slug)}`
      : "authors.html";
    return `
      <article class="author-highlight-card">
        <div class="author-highlight-header">
          <div class="author-highlight-meta">
            <h3>${escapeHtml(author.name)}</h3>
            <p>${escapeHtml(author.country)}${accolade}</p>
          </div>
          <span class="author-highlight-emoji" aria-hidden="true">${escapeHtml(author.flag || "✍️")}</span>
        </div>
        ${tagSection}
        <p class="author-highlight-body">${escapeHtml(author.summary)}</p>
        ${worksLine}
        <a class="author-highlight-link" href="${escapeHtml(detailLink)}">阅读作家档案</a>
      </article>
    `;
  }

  function createTierCard(library) {
    const tags = toArray(library.highlights)
      .slice(0, 3)
      .map((tag) => `<span class="tier-card__tag">${escapeHtml(tag)}</span>`)
      .join("");
    const infoLines = [];
    if (library.address) {
      infoLines.push(`📍 ${library.address}`);
    }
    if (library.services) {
      infoLines.push(`✨ ${library.services}`);
    }
    if (library.metro) {
      infoLines.push(`🚇 ${library.metro}`);
    }

    const sections = [
      `<div class="tier-card__header">` +
        `<h3>${escapeHtml(library.name)}</h3>` +
        `<span class="tier-card__city">${escapeHtml(library.city)}</span>` +
      `</div>`,
      `<p class="tier-card__intro">${escapeHtml(library.intro || "")}</p>`
    ];

    if (tags) {
      sections.push(`<div class="tier-card__tags">${tags}</div>`);
    }

    if (infoLines.length) {
      const infoHtml = infoLines
        .map((line) => `<li>${escapeHtml(line)}</li>`)
        .join("");
      sections.push(`<ul class="tier-card__info">${infoHtml}</ul>`);
    }

    if (library.website) {
      sections.push(
        `<div class="tier-card__actions"><a class="tier-card__link" href="${escapeHtml(
          library.website
        )}" target="_blank" rel="noopener">官网详情</a></div>`
      );
    }

    return `<article class="tier-card">${sections.join("")}</article>`;
  }

  function renderTieredLibraries(tierId) {
    const grid = document.getElementById("tiered-library-grid");
    const caption = document.getElementById("tiered-library-caption");
    const tabs = Array.from(document.querySelectorAll(".tiered-tab"));

    if (!grid || !tabs.length) {
      return;
    }

    const group =
      tieredLibraryGroups.find((item) => item.id === tierId) ||
      tieredLibraryGroups[0];

    tabs.forEach((tab) => {
      const isActive = Boolean(group && tab.dataset.tier === group.id);
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      if (isActive) {
        grid.setAttribute("aria-labelledby", tab.id || "");
      }
    });

    if (!group) {
      if (caption) {
        caption.textContent = "暂未收录对应城市能级的图书馆信息";
      }
      grid.innerHTML = '<div class="empty-state">暂未收录对应城市能级的图书馆信息。</div>';
      return;
    }

    if (caption) {
      caption.textContent = group.caption;
    }

    if (!group.items.length) {
      grid.innerHTML = '<div class="empty-state">暂未收录对应城市能级的图书馆信息。</div>';
      return;
    }

    grid.innerHTML = group.items.map(createTierCard).join("");
  }

  function setupTieredLibraries() {
    const tabs = Array.from(document.querySelectorAll(".tiered-tab"));
    const grid = document.getElementById("tiered-library-grid");

    if (!grid || !tabs.length) {
      return;
    }

    const defaultTier =
      tabs.find((tab) => tab.classList.contains("active"))?.dataset.tier ||
      (tieredLibraryGroups[0] ? tieredLibraryGroups[0].id : "");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        renderTieredLibraries(tab.dataset.tier);
      });

      tab.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          renderTieredLibraries(tab.dataset.tier);
        }
      });
    });

    renderTieredLibraries(defaultTier);
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

    setupTieredLibraries();

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
    const authorGrid = document.getElementById("featured-authors-grid");
    const authorCount = document.getElementById("featured-author-count");

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
        filtered,
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

    if (authorGrid) {
      authorGrid.innerHTML = featuredAuthors
        .map((author) => createAuthorHighlightCard(author))
        .join("");
    }

    if (authorCount) {
      authorCount.textContent = String(featuredAuthors.length);
    }

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
