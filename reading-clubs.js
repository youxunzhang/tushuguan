const readingClubCategories = [
    {
        name: '城市文化读书会',
        icon: '🏙️',
        description: '走进各大城市的文化地标与公共空间，一起阅读与城市相关的故事。',
        clubs: [
            {
                name: '北京三味城市读书会',
                city: '北京',
                region: '华北',
                mode: '线下',
                schedule: '每月第二个周六 14:00-16:30',
                venue: '东城区 国家图书馆文津街分馆',
                focus: '古典文学与城市记忆',
                contact: '微信公众号：三味读书',
                tags: ['古典文学', '城市漫步', '文化沙龙'],
                link: 'https://mp.weixin.qq.com/'
            },
            {
                name: '上海外滩夜读会',
                city: '上海',
                region: '华东',
                mode: '混合',
                schedule: '每月最后一个周五 19:30-21:00',
                venue: '黄浦区 外滩源公共空间 / 腾讯会议',
                focus: '城市更新与建筑美学',
                contact: '邮箱：bundreadclub@163.com',
                tags: ['建筑', '设计', '城市更新'],
                link: 'https://www.douban.com/group/631202/'
            },
            {
                name: '成都慢生活阅读联盟',
                city: '成都',
                region: '西南',
                mode: '线下',
                schedule: '每月第三个周日 15:00-17:30',
                venue: '锦江区 方所成都店共享空间',
                focus: '生活方式与旅行文学',
                contact: '微信：chengdulifeclub',
                tags: ['旅行', '生活方式', '本地文化'],
                link: 'https://www.xiaohongshu.com/'
            },
            {
                name: '西安古都历史共读会',
                city: '西安',
                region: '西北',
                mode: '线下',
                schedule: '每月第一个周六 10:00-12:00',
                venue: '碑林区 西安市图书馆古籍部',
                focus: '历史典籍与考古发现',
                contact: 'QQ群：738221594',
                tags: ['历史', '考古', '非遗'],
                link: 'https://www.douban.com/group/731296/'
            }
        ]
    },
    {
        name: '高校读书社团精选',
        icon: '🎓',
        description: '聚合高校学生自发组织的读书社团，分享学术与思想碰撞。',
        clubs: [
            {
                name: '北大未名人文读书会',
                city: '北京',
                region: '华北',
                mode: '线下',
                schedule: '校内每周四晚 19:00-21:00',
                venue: '北京大学 图书馆人文分馆会议室',
                focus: '人文社科与思想史',
                contact: '学生会邮箱：reading@pku.edu.cn',
                tags: ['哲学', '社科', '学术研讨'],
                link: 'https://www.pku.edu.cn/'
            },
            {
                name: '复旦光华读书社',
                city: '上海',
                region: '华东',
                mode: '混合',
                schedule: '每两周周三 18:30-20:30',
                venue: '复旦大学 光华楼东辅楼共享空间 / 腾讯会议',
                focus: '经济与科技前沿选读',
                contact: '社团微信：fudanbookclub',
                tags: ['商业', '科技趋势', '双语阅读'],
                link: 'https://www.fudan.edu.cn/'
            },
            {
                name: '武汉大学樱顶书房',
                city: '武汉',
                region: '华中',
                mode: '线下',
                schedule: '每周日 15:00-17:00',
                venue: '武汉大学 老图书馆一层沙龙区',
                focus: '历史与社会议题',
                contact: '微信号：whureading',
                tags: ['历史', '社会观察', '多元对话'],
                link: 'https://www.whu.edu.cn/'
            },
            {
                name: '中山大学岭南书屋',
                city: '广州',
                region: '华南',
                mode: '混合',
                schedule: '每月第二周周四 19:00-21:00',
                venue: '中山大学 南校园文科图书馆 / 腾讯会议',
                focus: '粤港澳与南方文化',
                contact: '邮箱：lingnanreading@mail.sysu.edu.cn',
                tags: ['岭南文化', '区域研究'],
                link: 'https://www.sysu.edu.cn/'
            }
        ]
    },
    {
        name: '亲子与青少年共读',
        icon: '👨‍👩‍👧',
        description: '适合家庭、青少年参与的阅读活动，让阅读成为亲子共通语言。',
        clubs: [
            {
                name: '广州亲子悦读营',
                city: '广州',
                region: '华南',
                mode: '线下',
                schedule: '每月第二个周日 10:00-11:30',
                venue: '天河区 少儿图书馆多功能厅',
                focus: '儿童文学与科学启蒙',
                contact: '微信小程序：悦读营',
                tags: ['儿童文学', '亲子互动', '科学启蒙'],
                link: 'https://www.gzlib.gov.cn/'
            },
            {
                name: '杭州自然观察读书会',
                city: '杭州',
                region: '华东',
                mode: '线下',
                schedule: '每月第三个周六 09:30-11:30',
                venue: '杭州少年宫 科学教室与植物园',
                focus: '自然科普与户外探索',
                contact: '公众号：杭州自然阅读',
                tags: ['自然教育', '户外活动'],
                link: 'https://www.hzlib.net/'
            },
            {
                name: '南京少年历史学堂',
                city: '南京',
                region: '华东',
                mode: '线下',
                schedule: '每周六下午 14:00-15:30',
                venue: '南京市图书馆 少儿部共享教室',
                focus: '中国历史故事与手作体验',
                contact: '电话：025-83155888 转少儿部',
                tags: ['历史启蒙', '手工活动'],
                link: 'https://www.njlib.cn/'
            },
            {
                name: '深圳青少年英文共读',
                city: '深圳',
                region: '华南',
                mode: '混合',
                schedule: '每两周周日 16:00-17:30',
                venue: '南山区 青少年活动中心 / Zoom',
                focus: '英文原版读物与表达训练',
                contact: '微信：szenglishclub',
                tags: ['英文阅读', '演讲表达'],
                link: 'https://www.szlib.org.cn/'
            }
        ]
    },
    {
        name: '线上共读与开放社群',
        icon: '🌐',
        description: '不受城市限制的线上读书会，随时随地连线全国书友。',
        clubs: [
            {
                name: '豆瓣月度共读计划',
                city: '线上',
                region: '全国',
                mode: '线上',
                schedule: '全年开放，按月选书',
                venue: '豆瓣小组 + 飞书群',
                focus: '新知与经典互读',
                contact: '豆瓣小组：我们一起读书吧',
                tags: ['线上', '多主题'],
                link: 'https://www.douban.com/group/bookreaders/'
            },
            {
                name: 'zoom女性成长读书会',
                city: '线上',
                region: '全国',
                mode: '线上',
                schedule: '每周三晚 20:00-21:30',
                venue: 'Zoom会议室 + 飞书文档',
                focus: '女性成长与自我发展',
                contact: '添加微信：womenread2024',
                tags: ['女性成长', '心理学'],
                link: 'https://www.zhihu.com/'
            },
            {
                name: '青年创业者阅读社',
                city: '线上',
                region: '全国',
                mode: '混合',
                schedule: '每月两次周四晚 20:00-21:30',
                venue: '腾讯会议 + 不定期线下路演',
                focus: '商业思维与创新案例',
                contact: '微信群：创业者阅读会',
                tags: ['创业', '商业案例', '社群交流'],
                link: 'https://www.juejin.cn/'
            },
            {
                name: '图书馆员在线研读圈',
                city: '线上',
                region: '全国',
                mode: '线上',
                schedule: '每月第四周周二 19:30-21:00',
                venue: '全国图书馆微信群 + 腾讯会议',
                focus: '阅读推广与信息素养',
                contact: '邮箱：librarycircle@163.com',
                tags: ['图书馆', '阅读推广', '职业社群'],
                link: 'https://www.librarysociety.cn/'
            }
        ]
    },
    {
        name: '专题研读与专业社群',
        icon: '🔍',
        description: '聚焦某一领域深度研读，适合对专业主题有长期兴趣的读者。',
        clubs: [
            {
                name: '中国近现代史研读社',
                city: '上海',
                region: '华东',
                mode: '线下',
                schedule: '每月第二个周六 14:00-17:00',
                venue: '上海图书馆 东馆历史文献区',
                focus: '近现代史料与口述史',
                contact: '邮件报名：modernhistory@126.com',
                tags: ['历史研究', '档案', '专题研讨'],
                link: 'https://www.library.sh.cn/'
            },
            {
                name: 'AI与人文交叉阅读会',
                city: '深圳',
                region: '华南',
                mode: '混合',
                schedule: '每月最后一个周三 19:30-21:30',
                venue: '南山区 科技园创新中心 / 腾讯会议',
                focus: '人工智能伦理与人文反思',
                contact: 'Slack社区：AI Reading Lab',
                tags: ['人工智能', '跨学科', '伦理'],
                link: 'https://www.szaitech.org/'
            },
            {
                name: '乡建与乡村振兴读书会',
                city: '贵阳',
                region: '西南',
                mode: '混合',
                schedule: '每月第三周周五 19:00-21:00',
                venue: '贵阳市文化馆乡建空间 / 钉钉会议',
                focus: '乡村建设与社会创新',
                contact: '微信：xiangjianclub',
                tags: ['乡村振兴', '社会创新'],
                link: 'https://www.guizhouculture.cn/'
            },
            {
                name: '法律人深度共读圈',
                city: '北京',
                region: '华北',
                mode: '线下',
                schedule: '每月第一周周四 19:00-21:00',
                venue: '朝阳区 律新空间共享办公室',
                focus: '法学前沿与案例解析',
                contact: '邮件：lawclub@outlook.com',
                tags: ['法律', '行业交流'],
                link: 'https://www.chinalawinfo.com/'
            }
        ]
    }
];

const readingClubState = {
    keyword: '',
    region: '',
    mode: ''
};

function initReadingClubFilters() {
    populateRegionOptions();

    const searchInput = document.getElementById('reading-club-search');
    const regionSelect = document.getElementById('reading-club-region');
    const modeSelect = document.getElementById('reading-club-mode');

    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            readingClubState.keyword = event.target.value.trim().toLowerCase();
            renderReadingClubCategories();
        });
    }

    if (regionSelect) {
        regionSelect.addEventListener('change', (event) => {
            readingClubState.region = event.target.value;
            renderReadingClubCategories();
        });
    }

    if (modeSelect) {
        modeSelect.addEventListener('change', (event) => {
            readingClubState.mode = event.target.value;
            renderReadingClubCategories();
        });
    }
}

function populateRegionOptions() {
    const regionSelect = document.getElementById('reading-club-region');
    if (!regionSelect) return;

    const regionOrder = ['华北', '华东', '华南', '华中', '东北', '西北', '西南', '全国'];
    const regions = new Set();

    readingClubCategories.forEach(category => {
        category.clubs.forEach(club => {
            if (club.region) {
                regions.add(club.region);
            }
        });
    });

    Array.from(regions)
        .sort((a, b) => regionOrder.indexOf(a) - regionOrder.indexOf(b))
        .forEach(region => {
            const option = document.createElement('option');
            option.value = region;
            option.textContent = region;
            regionSelect.appendChild(option);
        });
}

function matchReadingClub(club) {
    const keyword = readingClubState.keyword;
    const region = readingClubState.region;
    const mode = readingClubState.mode;

    const keywordMatch = !keyword || [
        club.name,
        club.city,
        club.focus,
        club.venue,
        ...(club.tags || [])
    ].some(field => field && field.toLowerCase().includes(keyword));

    const regionMatch = !region || club.region === region;
    const modeMatch = !mode || club.mode === mode;

    return keywordMatch && regionMatch && modeMatch;
}

function renderReadingClubCategories() {
    const container = document.getElementById('reading-club-categories');
    if (!container) return;

    container.innerHTML = '';
    let totalClubs = 0;

    readingClubCategories.forEach(category => {
        const matchingClubs = category.clubs.filter(matchReadingClub);
        totalClubs += matchingClubs.length;

        const section = document.createElement('section');
        section.className = 'reading-club-category';
        section.innerHTML = `
            <div class="reading-club-category-header">
                <div class="reading-club-category-icon">${category.icon}</div>
                <div class="reading-club-category-meta">
                    <h3>${category.name}</h3>
                    <p>${category.description}</p>
                </div>
                <span class="reading-club-category-count">${matchingClubs.length ? `共 ${matchingClubs.length} 个` : '暂无符合条件的读书会'}</span>
            </div>
            <div class="reading-club-cards">
                ${matchingClubs.length ? matchingClubs.map(renderReadingClubCard).join('') : '<div class="empty-state small">暂未找到符合筛选条件的读书会，欢迎提交补充信息。</div>'}
            </div>
        `;

        container.appendChild(section);
    });

    updateReadingClubSummary(totalClubs);
}

function renderReadingClubCard(club) {
    return `
        <article class="reading-club-card">
            <div class="reading-club-card-header">
                <h4>${club.name}</h4>
                <span class="reading-club-mode">${club.mode}</span>
            </div>
            <p class="reading-club-location">📍 ${club.city} · ${club.venue}</p>
            <p class="reading-club-schedule">🗓️ ${club.schedule}</p>
            <p class="reading-club-focus">主题：${club.focus}</p>
            ${club.tags?.length ? `<div class="reading-club-tags">${club.tags.map(tag => `<span class="reading-club-tag">${tag}</span>`).join('')}</div>` : ''}
            <div class="reading-club-footer">
                <span class="reading-club-contact">📮 ${club.contact}</span>
                ${club.link ? `<a class="reading-club-link" href="${club.link}" target="_blank" rel="noopener">了解详情</a>` : ''}
            </div>
        </article>
    `;
}

function updateReadingClubSummary(total) {
    const summaryElement = document.getElementById('reading-club-total');
    if (summaryElement) {
        summaryElement.textContent = total;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initReadingClubFilters();
    renderReadingClubCategories();
});
