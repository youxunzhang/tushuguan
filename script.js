// ===== 城市图片生成功能 =====
function generateCityImageUrl(cityName, libraryName) {
    // 城市图片映射 - 使用高质量的城市天际线图片
    const cityImageMap = {
        '北京': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
        '上海': 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
        '广州': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
        '深圳': 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
        '杭州': 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
        '南京': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
        '成都': 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
        '武汉': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
        '西安': 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
        '重庆': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center&auto=format&q=80'
    };

    // 如果有城市图片映射，使用它
    if (cityImageMap[cityName]) {
        return cityImageMap[cityName];
    }

    // 使用Lorem Picsum作为备选，提供随机但高质量的城市图片
    const randomSeed = cityName.charCodeAt(0) + cityName.length;
    return `https://picsum.photos/400/300?random=${randomSeed}`;
}

// ===== 更新图书馆数据以包含城市图片 =====
function updateLibraryDataWithCityImages() {
    Object.keys(libraryData).forEach(city => {
        libraryData[city].forEach(library => {
            // 为每个图书馆添加城市图片
            library.cityImage = generateCityImageUrl(city, library.name);
        });
    });
}

// ===== 导航栏功能 =====
function initNavigation() {
    // 获取导航栏元素
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileClose = document.getElementById('mobile-close');
    
    // 获取所有导航链接（桌面和移动端）
    const desktopNavLinks = document.querySelectorAll('.navbar-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const allNavLinks = [...desktopNavLinks, ...mobileNavLinks];

    // 移动端菜单切换功能
    function toggleMobileMenu() {
        const isActive = mobileMenu.classList.contains('active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }

    function openMobileMenu() {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        mobileToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        mobileToggle.classList.remove('active');
        document.body.style.overflow = '';
    }

    // 事件监听器
    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }

    if (mobileClose) {
        mobileClose.addEventListener('click', closeMobileMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }

    // 导航链接点击事件
    allNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // 更新活动状态
                updateActiveLink(targetId);
                
                // 关闭移动端菜单
                closeMobileMenu();
                
                // 平滑滚动到目标区域
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        });
    });

    // 更新活动链接状态
    function updateActiveLink(targetId) {
        allNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === targetId) {
                link.classList.add('active');
            }
        });
    }

    // 滚动时更新活动状态和导航栏样式
    function handleScroll() {
        const scrollY = window.scrollY;
        
        // 更新导航栏滚动状态
        if (scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // 更新活动链接状态
        const sections = ['home', 'libraries', 'games', 'about', 'contact', 'sitemap'];
        let currentSection = 'home';

        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop - 100;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollY >= sectionTop && scrollY < sectionBottom) {
                    currentSection = sectionId;
                }
            }
        });

        updateActiveLink(currentSection);
    }

    // 监听滚动事件
    window.addEventListener('scroll', handleScroll);
    
    // 初始化活动状态
    updateActiveLink('home');
}


// 渲染城市列表
const cityListDiv = document.getElementById('city-list');
const libraryListDiv = document.getElementById('library-list');
const modal = document.getElementById('library-modal');
const modalContent = document.getElementById('library-details');
const closeBtn = document.querySelector('.close-btn');

let currentCityIndex = 0;

function renderCities() {
    const cityList = document.getElementById('city-list');
    if (!cityList) {
        console.error('找不到city-list元素');
        return;
    }
    
    try {
        const cities = Object.keys(libraryData);
        if (cities.length === 0) {
            console.error('没有找到城市数据');
            return;
        }
        
        const cityButtons = cities.map(city => 
            `<button class="city-btn" onclick="filterByCity('${city}')">${city}</button>`
        ).join('');
        
        cityList.innerHTML = `
            <h2>选择城市</h2>
            <div class="city-buttons">${cityButtons}</div>
        `;
    } catch (error) {
        console.error('渲染城市列表错误:', error);
    }
}

function renderLibraries() {
    const libraryList = document.getElementById('library-list');
    if (!libraryList) {
        console.error('找不到library-list元素');
        return;
    }
    
    try {
        const cities = Object.keys(libraryData);
        if (cities.length === 0) {
            console.error('没有找到城市数据');
            return;
        }
        
        const currentCity = cities[currentCityIndex] || cities[0];
        const libraries = libraryData[currentCity] || [];
        
        if (libraries.length === 0) {
            libraryList.innerHTML = '<p>该城市暂无图书馆信息</p>';
            return;
        }
        
        libraryList.innerHTML = libraries.map(library => `
            <div class="library-card" onclick="showLibraryDetails('${currentCity}', '${library.name}')">
                <div class="library-image">
                    <div class="image-loading">
                        <div class="loading-spinner"></div>
                    </div>
                    <img src="${library.cityImage || library.image}" alt="${library.name}" 
                         onload="this.parentElement.querySelector('.image-loading').style.display='none'"
                         onerror="this.parentElement.querySelector('.image-loading').style.display='none'; this.src='images/default-library.svg'">
                    <div class="city-overlay">
                        <span class="city-name">${currentCity}</span>
                    </div>
                </div>
                <div class="library-info">
                    <h3>${library.name}</h3>
                    <p><span class="library-icon">📍</span> ${library.address}</p>
                    <p><span class="library-icon">📞</span> ${library.phone}</p>
                    <p><span class="library-icon">🌐</span> ${library.website}</p>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('渲染图书馆列表错误:', error);
    }
}

function showLibraryDetails(city, libraryName) {
    const modal = document.getElementById('library-modal');
    const modalContent = document.getElementById('library-details');
    
    if (!modal || !modalContent) {
        console.error('找不到模态框元素');
        return;
    }
    
    try {
        const library = libraryData[city]?.find(lib => lib.name === libraryName);
        if (!library) {
            console.error('找不到图书馆信息');
            return;
        }
        
        modalContent.innerHTML = `
            <div class="modal-header">
                <div class="modal-image-container">
                    <div class="image-loading">
                        <div class="loading-spinner"></div>
                    </div>
                    <img src="${library.cityImage || library.image}" alt="${library.name}" 
                         onload="this.parentElement.querySelector('.image-loading').style.display='none'; this.style.opacity='1';"
                         onerror="this.src='images/default-library.svg'; this.parentElement.querySelector('.image-loading').style.display='none'; this.style.opacity='1';">
                    <div class="modal-city-overlay">
                        <span class="modal-city-name">${city}</span>
                    </div>
                </div>
                <h2>${library.name}</h2>
            </div>
            <div class="modal-body">
                <p><strong>🏙️ 城市：</strong>${city}</p>
                <p><strong>📍 地址：</strong>${library.address}</p>
                <p><strong>📞 电话：</strong>${library.phone}</p>
                <p><strong>🌐 官网：</strong><a href="${library.website}" target="_blank">${library.website}</a></p>
                <p><strong>📖 简介：</strong>${library.description}</p>
            </div>
        `;
        
        // 添加动画效果
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    } catch (error) {
        console.error('显示图书馆详情错误:', error);
    }
}

function filterByCity(city) {
    try {
        const cities = Object.keys(libraryData);
        currentCityIndex = cities.indexOf(city);
        if (currentCityIndex === -1) {
            currentCityIndex = 0;
        }
        
        // 更新城市按钮状态
        document.querySelectorAll('.city-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        
        renderLibraries();
    } catch (error) {
        console.error('筛选城市错误:', error);
    }
}

// 模态框关闭功能
function initModal() {
    const modal = document.getElementById('library-modal');
    const closeBtn = document.querySelector('.close-btn');
    
    if (closeBtn && modal) {
        closeBtn.onclick = function() {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        };
    }
    
    // 点击模态框外部关闭
    if (modal) {
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 300);
            }
        };
    }
}


// 键盘事件
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeBtn.onclick();
  }
});

// 游戏相关变量
let gameState = {
    isPlaying: false,
    isPaused: false,
    score: 0,
    timeLeft: 60,
    level: 1,
    correctCount: 0,
    totalCount: 0,
    timer: null
};

// 游戏数据
const gameBooks = [
    { title: "《红楼梦》", category: "public", type: "古典文学" },
    { title: "《西游记》", category: "public", type: "古典文学" },
    { title: "《水浒传》", category: "public", type: "古典文学" },
    { title: "《三国演义》", category: "public", type: "古典文学" },
    { title: "《史记》", category: "public", type: "历史文献" },
    { title: "《资治通鉴》", category: "public", type: "历史文献" },
    { title: "《唐诗三百首》", category: "public", type: "文学" },
    { title: "《宋词精选》", category: "public", type: "文学" },
    { title: "《高等数学》", category: "university", type: "数学" },
    { title: "《线性代数》", category: "university", type: "数学" },
    { title: "《概率论》", category: "university", type: "数学" },
    { title: "《大学物理》", category: "university", type: "物理" },
    { title: "《有机化学》", category: "university", type: "化学" },
    { title: "《计算机科学》", category: "university", type: "计算机" },
    { title: "《数据结构》", category: "university", type: "计算机" },
    { title: "《算法导论》", category: "university", type: "计算机" },
    { title: "《医学基础》", category: "special", type: "医学" },
    { title: "《临床诊断学》", category: "special", type: "医学" },
    { title: "《药理学》", category: "special", type: "医学" },
    { title: "《法律条文》", category: "special", type: "法律" },
    { title: "《宪法学》", category: "special", type: "法律" },
    { title: "《刑法学》", category: "special", type: "法律" },
    { title: "《艺术史》", category: "special", type: "艺术" },
    { title: "《音乐理论》", category: "special", type: "艺术" }
];

// 游戏功能
function initGame() {
    const startBtn = document.getElementById('start-game');
    const resetBtn = document.getElementById('reset-game');
    const pauseBtn = document.getElementById('pause-game');
    const playAgainBtn = document.getElementById('play-again');
    
    if (startBtn) startBtn.addEventListener('click', startGame);
    if (resetBtn) resetBtn.addEventListener('click', resetGame);
    if (pauseBtn) pauseBtn.addEventListener('click', togglePause);
    if (playAgainBtn) playAgainBtn.addEventListener('click', startGame);
    
    // 确保DOM完全加载后再设置拖拽功能
    setTimeout(() => {
        setupDragAndDrop();
        updateGameStats();
    }, 100);
}

function startGame() {
    gameState.isPlaying = true;
    gameState.isPaused = false;
    gameState.score = 0;
    gameState.timeLeft = 60;
    gameState.level = 1;
    gameState.correctCount = 0;
    gameState.totalCount = 0;
    
    // 隐藏结果界面
    const gameResult = document.getElementById('game-result');
    if (gameResult) gameResult.style.display = 'none';
    
    // 显示暂停按钮
    const pauseBtn = document.getElementById('pause-game');
    if (pauseBtn) pauseBtn.style.display = 'inline-block';
    
    // 生成图书
    generateBooks();
    
    // 开始计时
    startTimer();
    
    // 更新按钮状态
    updateGameControls();
    
    updateGameStats();
}

function resetGame() {
    gameState.isPlaying = false;
    gameState.isPaused = false;
    gameState.score = 0;
    gameState.timeLeft = 60;
    gameState.level = 1;
    gameState.correctCount = 0;
    gameState.totalCount = 0;
    
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
    
    // 清空图书列表
    const booksList = document.getElementById('books-list');
    if (booksList) booksList.innerHTML = '';
    
    // 清空分类区域
    const dropZones = document.querySelectorAll('.drop-zone');
    dropZones.forEach(zone => {
        zone.innerHTML = '';
        zone.classList.remove('has-book');
    });
    
    // 隐藏结果界面
    const gameResult = document.getElementById('game-result');
    if (gameResult) gameResult.style.display = 'none';
    
    // 隐藏暂停按钮
    const pauseBtn = document.getElementById('pause-game');
    if (pauseBtn) pauseBtn.style.display = 'none';
    
    updateGameControls();
    updateGameStats();
}

function togglePause() {
    gameState.isPaused = !gameState.isPaused;
    
    if (gameState.isPaused) {
        if (gameState.timer) {
            clearInterval(gameState.timer);
            gameState.timer = null;
        }
    } else {
        startTimer();
    }
    
    updateGameControls();
}

function startTimer() {
    if (gameState.timer) {
        clearInterval(gameState.timer);
    }
    
    gameState.timer = setInterval(() => {
        if (!gameState.isPaused && gameState.isPlaying) {
            gameState.timeLeft--;
            updateGameStats();
            
            if (gameState.timeLeft <= 0) {
                endGame();
            }
        }
    }, 1000);
}

function generateBooks() {
    const booksList = document.getElementById('books-list');
    if (!booksList) return;
    
    booksList.innerHTML = '';
    
    // 随机选择8本书
    const shuffledBooks = [...gameBooks].sort(() => Math.random() - 0.5);
    const selectedBooks = shuffledBooks.slice(0, 8);
    
    selectedBooks.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book-item';
        bookElement.draggable = true;
        bookElement.dataset.category = book.category;
        bookElement.dataset.bookIndex = index;
        bookElement.textContent = book.title;
        
        bookElement.addEventListener('dragstart', handleDragStart);
        bookElement.addEventListener('dragend', handleDragEnd);
        
        booksList.appendChild(bookElement);
    });
    
    gameState.totalCount = selectedBooks.length;
}

function setupDragAndDrop() {
    const dropZones = document.querySelectorAll('.drop-zone');
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
        zone.addEventListener('dragenter', handleDragEnter);
        zone.addEventListener('dragleave', handleDragLeave);
    });
}

function handleDragStart(e) {
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.outerHTML);
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
    e.preventDefault();
    e.target.closest('.category').classList.add('drag-over');
}

function handleDragLeave(e) {
    e.target.closest('.category').classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    const category = e.target.closest('.category');
    if (category) {
        category.classList.remove('drag-over');
    }
    
    const dropZone = e.target.closest('.drop-zone');
    if (!dropZone) return;
    
    const categoryType = dropZone.dataset.category;
    
    // 获取拖拽的图书数据
    const draggedElement = document.querySelector('.dragging');
    if (!draggedElement) return;
    
    const bookCategory = draggedElement.dataset.category;
    
    // 检查分类是否正确
    if (bookCategory === categoryType) {
        // 正确分类
        gameState.score += 10;
        gameState.correctCount++;
        
        // 添加正确反馈
        showFeedback('正确！', 'success');
    } else {
        // 错误分类
        gameState.score = Math.max(0, gameState.score - 5);
        showFeedback('错误！', 'error');
    }
    
    // 将图书移动到分类区域
    const bookClone = draggedElement.cloneNode(true);
    bookClone.classList.remove('dragging');
    bookClone.draggable = false;
    bookClone.style.cursor = 'default';
    
    dropZone.appendChild(bookClone);
    dropZone.classList.add('has-book');
    
    // 移除原图书
    draggedElement.remove();
    
    // 检查是否所有图书都已分类
    const remainingBooks = document.querySelectorAll('#books-list .book-item');
    if (remainingBooks.length === 0) {
        // 所有图书已分类，进入下一关
        setTimeout(() => {
            nextLevel();
        }, 500);
    }
    
    updateGameStats();
}

function nextLevel() {
    gameState.level++;
    gameState.timeLeft += 30; // 增加30秒时间
    
    // 显示升级信息
    showFeedback(`进入第 ${gameState.level} 关！`, 'level-up');
    
    // 清理所有分类区域
    const dropZones = document.querySelectorAll('.drop-zone');
    dropZones.forEach(zone => {
        zone.innerHTML = '';
        zone.classList.remove('has-book');
    });
    
    // 生成新的图书
    setTimeout(() => {
        generateBooks();
        // 重新设置拖拽功能
        setupDragAndDrop();
    }, 1000);
}

function endGame() {
    gameState.isPlaying = false;
    
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
    
    // 显示结果
    showGameResult();
    
    // 更新按钮状态
    updateGameControls();
}

function showGameResult() {
    const gameResult = document.getElementById('game-result');
    const finalScore = document.getElementById('final-score');
    const correctCount = document.getElementById('correct-count');
    const totalCount = document.getElementById('total-count');
    const finalTime = document.getElementById('final-time');
    
    if (gameResult) {
        if (finalScore) finalScore.textContent = gameState.score;
        if (correctCount) correctCount.textContent = gameState.correctCount;
        if (totalCount) totalCount.textContent = gameState.totalCount;
        if (finalTime) finalTime.textContent = 60 - gameState.timeLeft;
        
        gameResult.style.display = 'block';
    }
}

function updateGameStats() {
    const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('timer');
    const levelElement = document.getElementById('level');
    
    if (scoreElement) scoreElement.textContent = gameState.score;
    if (timerElement) timerElement.textContent = gameState.timeLeft;
    if (levelElement) levelElement.textContent = gameState.level;
}

function updateGameControls() {
    const startBtn = document.getElementById('start-game');
    const resetBtn = document.getElementById('reset-game');
    const pauseBtn = document.getElementById('pause-game');
    
    if (startBtn) {
        startBtn.disabled = gameState.isPlaying;
        startBtn.textContent = gameState.isPlaying ? '游戏中...' : '开始游戏';
    }
    
    if (resetBtn) {
        resetBtn.disabled = false;
    }
    
    if (pauseBtn) {
        pauseBtn.disabled = !gameState.isPlaying;
        pauseBtn.textContent = gameState.isPaused ? '继续' : '暂停';
    }
}

function showFeedback(message, type) {
    // 创建反馈元素
    const feedback = document.createElement('div');
    feedback.className = `feedback feedback-${type}`;
    feedback.textContent = message;
    feedback.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#667eea'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        animation: feedbackShow 0.3s ease;
    `;
    
    document.body.appendChild(feedback);
    
    // 1秒后移除
    setTimeout(() => {
        feedback.style.animation = 'feedbackHide 0.3s ease';
        setTimeout(() => {
            if (feedback.parentNode) {
                feedback.parentNode.removeChild(feedback);
            }
        }, 300);
    }, 1000);
}

// 添加反馈动画CSS
const feedbackCSS = `
@keyframes feedbackShow {
    from {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
    }
    to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
}

@keyframes feedbackHide {
    from {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
    to {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
    }
}
`;

// 动态添加CSS
const style = document.createElement('style');
style.textContent = feedbackCSS;
document.head.appendChild(style);

// 收藏和分享功能
function initFavoriteAndShare() {
    const favoriteBtn = document.getElementById('favorite-btn');
    const shareBtn = document.getElementById('share-btn');
    const mobileFavoriteBtn = document.getElementById('mobile-favorite-btn');
    const mobileShareBtn = document.getElementById('mobile-share-btn');
    const shareModal = document.getElementById('share-modal');
    const copyLinkBtn = document.getElementById('copy-link-btn');
    
    // 收藏功能
    function handleFavoriteClick(btn) {
        const isFavorited = btn.classList.contains('favorited');
        
        if (isFavorited) {
            btn.classList.remove('favorited');
            showFeedback('已取消收藏', 'info');
            localStorage.removeItem('library_favorited');
        } else {
            btn.classList.add('favorited');
            showFeedback('已添加到收藏夹', 'success');
            localStorage.setItem('library_favorited', 'true');
        }
        
        // 同步两个按钮的状态
        if (favoriteBtn && mobileFavoriteBtn) {
            if (btn === favoriteBtn) {
                mobileFavoriteBtn.classList.toggle('favorited', !isFavorited);
            } else {
                favoriteBtn.classList.toggle('favorited', !isFavorited);
            }
        }
    }
    
    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', () => handleFavoriteClick(favoriteBtn));
        
        // 检查是否已收藏
        if (localStorage.getItem('library_favorited') === 'true') {
            favoriteBtn.classList.add('favorited');
        }
    }
    
    if (mobileFavoriteBtn) {
        mobileFavoriteBtn.addEventListener('click', () => handleFavoriteClick(mobileFavoriteBtn));
        
        // 检查是否已收藏
        if (localStorage.getItem('library_favorited') === 'true') {
            mobileFavoriteBtn.classList.add('favorited');
        }
    }
    
    // 分享功能
    function handleShareClick() {
        shareModal.classList.remove('hidden');
        setTimeout(() => {
            shareModal.classList.add('show');
        }, 10);
    }
    
    if (shareBtn) {
        shareBtn.addEventListener('click', handleShareClick);
    }
    
    if (mobileShareBtn) {
        mobileShareBtn.addEventListener('click', handleShareClick);
    }
    
    // 分享按钮事件
    const shareButtons = document.querySelectorAll('.share-button[data-platform]');
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.dataset.platform;
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            const text = encodeURIComponent('中国图书馆信息网 - 探索中国各地的图书馆');
            
            let shareUrl = '';
            
            switch(platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${text} ${url}`;
                    break;
                case 'telegram':
                    shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
                    break;
                case 'reddit':
                    shareUrl = `https://reddit.com/submit?url=${url}&title=${title}`;
                    break;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
    
    // 复制链接功能
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showFeedback('链接已复制到剪贴板', 'success');
            }).catch(() => {
                // 备用方案
                const textArea = document.createElement('textarea');
                textArea.value = window.location.href;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showFeedback('链接已复制到剪贴板', 'success');
            });
        });
    }
    
    // 关闭分享模态框
    const shareCloseBtn = shareModal.querySelector('.close-btn');
    if (shareCloseBtn) {
        shareCloseBtn.addEventListener('click', function() {
            shareModal.classList.remove('show');
            setTimeout(() => {
                shareModal.classList.add('hidden');
            }, 300);
        });
    }
    
    // 点击模态框外部关闭
    shareModal.addEventListener('click', function(e) {
        if (e.target === shareModal) {
            shareCloseBtn.click();
        }
    });
}

// ===== 城市页面功能 =====
function initCitiesPage() {
    // 初始化城市数据
    populateCitiesWithLibraries();
    
    // 渲染城市页面
    renderCitiesPage();
    
    // 初始化搜索和筛选功能
    initCitiesSearchAndFilter();
    
    // 初始化城市分类导航
    initCityCategories();
    
    // 初始化图书馆分类页面
    renderLibraryCategories();
    
    // 初始化图书馆分类导航
    initLibraryCategories();
    
    // 更新统计信息
    updateCitiesStats();
}

// 将图书馆数据填充到城市数据中
function populateCitiesWithLibraries() {
    Object.keys(libraryData).forEach(cityName => {
        // 在所有城市分类中查找匹配的城市
        Object.keys(citiesData).forEach(category => {
            citiesData[category].forEach(city => {
                if (city.name === cityName) {
                    city.libraries = libraryData[cityName];
                }
            });
        });
    });
}

// 渲染城市页面
function renderCitiesPage() {
    const citiesGrid = document.getElementById('cities-grid');
    if (!citiesGrid) return;
    
    let allCities = [];
    Object.keys(citiesData).forEach(category => {
        allCities = allCities.concat(citiesData[category]);
    });
    
    citiesGrid.innerHTML = allCities.map(city => `
        <div class="city-card" data-category="${city.province}" data-city="${city.name}">
            <div class="city-image">
                <img src="${generateCityImageUrl(city.name, '')}" alt="${city.name}" 
                     onerror="this.src='images/default-library.svg'">
                <div class="city-overlay">
                    <span>${city.province}</span>
                </div>
            </div>
            <div class="city-info">
                <h3 class="city-name">${city.name}</h3>
                <p class="city-province">${city.fullName}</p>
                <div class="city-stats">
                    <div class="city-stat">
                        <span class="city-stat-value">${city.population}</span>
                        <span class="city-stat-label">人口</span>
                    </div>
                    <div class="city-stat">
                        <span class="city-stat-value">${city.area}</span>
                        <span class="city-stat-label">面积</span>
                    </div>
                    <div class="city-stat">
                        <span class="city-stat-value">${city.gdp}</span>
                        <span class="city-stat-label">GDP</span>
                    </div>
                    <div class="city-stat">
                        <span class="city-stat-value">${city.libraries.length}</span>
                        <span class="city-stat-label">图书馆</span>
                    </div>
                </div>
                <p class="city-description">${city.description}</p>
                <div class="city-landmarks">
                    <h4>主要景点</h4>
                    <div class="landmark-tags">
                        ${city.landmarks.map(landmark => `<span class="landmark-tag">${landmark}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// 初始化城市搜索和筛选功能
function initCitiesSearchAndFilter() {
    const searchInput = document.getElementById('city-search');
    const provinceFilter = document.getElementById('province-filter');
    const populationFilter = document.getElementById('population-filter');
    
    // 填充省份筛选器
    const provinces = [...new Set(Object.values(citiesData).flat().map(city => city.province))];
    provinces.forEach(province => {
        const option = document.createElement('option');
        option.value = province;
        option.textContent = province;
        provinceFilter.appendChild(option);
    });
    
    // 搜索功能
    if (searchInput) {
        searchInput.addEventListener('input', filterCities);
    }
    
    // 筛选功能
    if (provinceFilter) {
        provinceFilter.addEventListener('change', filterCities);
    }
    
    if (populationFilter) {
        populationFilter.addEventListener('change', filterCities);
    }
}

// 筛选城市
function filterCities() {
    const searchTerm = document.getElementById('city-search')?.value.toLowerCase() || '';
    const selectedProvince = document.getElementById('province-filter')?.value || '';
    const selectedPopulation = document.getElementById('population-filter')?.value || '';
    
    const cityCards = document.querySelectorAll('.city-card');
    
    cityCards.forEach(card => {
        const cityName = card.dataset.city.toLowerCase();
        const cityCategory = card.dataset.category;
        const population = card.querySelector('.city-stat-value').textContent;
        
        let show = true;
        
        // 搜索筛选
        if (searchTerm && !cityName.includes(searchTerm)) {
            show = false;
        }
        
        // 省份筛选
        if (selectedProvince && cityCategory !== selectedProvince) {
            show = false;
        }
        
        // 人口筛选
        if (selectedPopulation) {
            const populationNum = parseInt(population.replace(/[^\d]/g, ''));
            switch (selectedPopulation) {
                case 'large':
                    if (populationNum < 1000) show = false;
                    break;
                case 'medium':
                    if (populationNum < 500 || populationNum >= 1000) show = false;
                    break;
                case 'small':
                    if (populationNum >= 500) show = false;
                    break;
            }
        }
        
        card.style.display = show ? 'block' : 'none';
    });
}

// 初始化城市分类导航
function initCityCategories() {
    const categoryButtons = document.querySelectorAll('.category-nav-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有活动状态
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // 添加活动状态到当前按钮
            button.classList.add('active');
            
            // 筛选城市
            const category = button.dataset.category;
            filterCitiesByCategory(category);
        });
    });
}

// 按分类筛选城市
function filterCitiesByCategory(category) {
    const cityCards = document.querySelectorAll('.city-card');
    
    cityCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 渲染图书馆分类页面
function renderLibraryCategories() {
    const content = document.getElementById('library-categories-content');
    if (!content) return;
    
    // 分类所有图书馆
    categorizeAllLibraries();
    
    content.innerHTML = Object.keys(libraryCategories).map(categoryKey => {
        const category = libraryCategories[categoryKey];
        return `
            <div class="library-category" data-category="${categoryKey}">
                <div class="library-category-header">
                    <div class="library-category-icon">${category.icon}</div>
                    <h3 class="library-category-title">${categoryKey}</h3>
                    <p class="library-category-description">${category.description}</p>
                </div>
                <div class="libraries-grid">
                    ${category.libraries.map(library => `
                        <div class="library-item">
                            <h4 class="library-name">${library.name}</h4>
                            <p class="library-city">${library.city}</p>
                            <p class="library-address">${library.address}</p>
                            <span class="library-type">${categoryKey}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

// 分类所有图书馆
function categorizeAllLibraries() {
    // 清空现有分类
    Object.keys(libraryCategories).forEach(category => {
        libraryCategories[category].libraries = [];
    });
    
    // 分类图书馆
    Object.keys(libraryData).forEach(city => {
        libraryData[city].forEach(library => {
            let category = '公共图书馆'; // 默认分类
            
            // 根据图书馆名称判断类型
            if (library.name.includes('大学') || library.name.includes('学院') || library.name.includes('学校')) {
                category = '大学图书馆';
            } else if (library.name.includes('医学') || library.name.includes('科学') || library.name.includes('技术') || library.name.includes('研究')) {
                category = '专业图书馆';
            } else if (library.name.includes('少儿') || library.name.includes('儿童') || library.name.includes('青少年')) {
                category = '少儿图书馆';
            } else if (library.name.includes('数字') || library.name.includes('电子') || library.name.includes('网络')) {
                category = '数字图书馆';
            }
            
            libraryCategories[category].libraries.push({
                ...library,
                city: city
            });
        });
    });
}

// 初始化图书馆分类导航
function initLibraryCategories() {
    const categoryButtons = document.querySelectorAll('.lib-category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有活动状态
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // 添加活动状态到当前按钮
            button.classList.add('active');
            
            // 筛选图书馆分类
            const category = button.dataset.category;
            filterLibraryCategories(category);
        });
    });
}

// 筛选图书馆分类
function filterLibraryCategories(category) {
    const libraryCategories = document.querySelectorAll('.library-category');
    
    libraryCategories.forEach(cat => {
        if (category === 'all' || cat.dataset.category === category) {
            cat.style.display = 'block';
        } else {
            cat.style.display = 'none';
        }
    });
}

// 更新城市统计信息
function updateCitiesStats() {
    let totalCities = 0;
    let totalLibraries = 0;
    let totalPopulation = 0;
    
    Object.keys(citiesData).forEach(category => {
        totalCities += citiesData[category].length;
        citiesData[category].forEach(city => {
            totalLibraries += city.libraries.length;
            const population = parseInt(city.population.replace(/[^\d]/g, ''));
            if (!isNaN(population)) {
                totalPopulation += population;
            }
        });
    });
    
    // 更新统计显示
    const totalCitiesEl = document.getElementById('total-cities');
    const totalLibrariesEl = document.getElementById('total-libraries');
    const totalPopulationEl = document.getElementById('total-population');
    
    if (totalCitiesEl) totalCitiesEl.textContent = totalCities;
    if (totalLibrariesEl) totalLibrariesEl.textContent = totalLibraries;
    if (totalPopulationEl) totalPopulationEl.textContent = `${(totalPopulation / 10000).toFixed(0)}万`;
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    try {
        // 首先更新图书馆数据以包含城市图片
        updateLibraryDataWithCityImages();
        
        initNavigation();
        initModal();
        renderCities();
        renderLibraries();
        initGame();
        initFavoriteAndShare();
        
        // 初始化城市页面
        initCitiesPage();
    } catch (error) {
        console.error('初始化错误:', error);
    }
}); 