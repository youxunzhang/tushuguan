// 导航栏功能
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// 汉堡菜单切换
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 导航链接点击事件
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // 移除所有active类
        navLinks.forEach(l => l.classList.remove('active'));
        
        // 添加active类到当前链接
        link.classList.add('active');
        
        // 关闭移动端菜单
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // 平滑滚动到目标区域
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 滚动时更新导航栏样式
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// 渲染城市列表
const cityListDiv = document.getElementById('city-list');
const libraryListDiv = document.getElementById('library-list');
const modal = document.getElementById('library-modal');
const modalContent = document.getElementById('library-details');
const closeBtn = document.querySelector('.close-btn');

let currentCityIndex = 0;

function renderCities() {
  // 保留标题
  const title = cityListDiv.querySelector('h2');
  cityListDiv.innerHTML = '';
  cityListDiv.appendChild(title);
  
  libraryData.forEach((item, idx) => {
    const btn = document.createElement('button');
    btn.className = 'city-btn' + (idx === currentCityIndex ? ' active' : '');
    btn.textContent = item.city;
    btn.onclick = () => {
      currentCityIndex = idx;
      renderCities();
      renderLibraries();
    };
    cityListDiv.appendChild(btn);
  });
}

function renderLibraries() {
  libraryListDiv.innerHTML = '';
  const libraries = libraryData[currentCityIndex].libraries;
  
  if (libraries.length === 0) {
    libraryListDiv.innerHTML = '<p style="text-align: center; color: #718096; font-size: 1.1rem;">该城市暂无图书馆信息</p>';
    return;
  }
  
  libraries.forEach((lib, idx) => {
    const card = document.createElement('div');
    card.className = 'library-card';
    card.innerHTML = `
      <div class="library-image">
        <div class="image-loading">
          <div class="loading-spinner"></div>
        </div>
        <img src="${lib.image}" alt="${lib.name}" 
             onload="this.parentElement.querySelector('.image-loading').style.display='none'; this.style.opacity='1';"
             onerror="this.src='images/default-library.svg'; this.parentElement.querySelector('.image-loading').style.display='none'; this.style.opacity='1';">
      </div>
      <div class="library-info">
        <h3>${lib.name}</h3>
        <p>📍 ${lib.address}</p>
        <p>📞 ${lib.phone}</p>
      </div>
    `;
    card.onclick = () => showLibraryDetails(lib);
    libraryListDiv.appendChild(card);
  });
}

function showLibraryDetails(lib) {
  modalContent.innerHTML = `
    <div class="modal-header">
      <div class="modal-image-container">
        <div class="image-loading">
          <div class="loading-spinner"></div>
        </div>
        <img src="${lib.image}" alt="${lib.name}" 
             onload="this.parentElement.querySelector('.image-loading').style.display='none'; this.style.opacity='1';"
             onerror="this.src='images/default-library.svg'; this.parentElement.querySelector('.image-loading').style.display='none'; this.style.opacity='1';">
      </div>
      <h2>${lib.name}</h2>
    </div>
    <div class="modal-body">
      <p><strong>📍 地址：</strong>${lib.address}</p>
      <p><strong>📞 电话：</strong>${lib.phone}</p>
      <p><strong>🌐 官网：</strong><a href="${lib.website}" target="_blank">${lib.website}</a></p>
      <p><strong>📖 简介：</strong>${lib.description}</p>
    </div>
  `;
  
  // 添加动画效果
  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
}

closeBtn.onclick = function() {
  modal.classList.remove('show');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
};

window.onclick = function(event) {
  if (event.target === modal) {
    closeBtn.onclick();
  }
};

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
    
    setupDragAndDrop();
    updateGameStats();
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
        nextLevel();
    }
    
    updateGameStats();
}

function nextLevel() {
    gameState.level++;
    gameState.timeLeft += 30; // 增加30秒时间
    
    // 显示升级信息
    showFeedback(`进入第 ${gameState.level} 关！`, 'level-up');
    
    // 生成新的图书
    setTimeout(() => {
        generateBooks();
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
    const shareModal = document.getElementById('share-modal');
    const copyLinkBtn = document.getElementById('copy-link-btn');
    
    // 收藏功能
    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', function() {
            const isFavorited = favoriteBtn.classList.contains('favorited');
            
            if (isFavorited) {
                favoriteBtn.classList.remove('favorited');
                showFeedback('已取消收藏', 'info');
                localStorage.removeItem('library_favorited');
            } else {
                favoriteBtn.classList.add('favorited');
                showFeedback('已添加到收藏夹', 'success');
                localStorage.setItem('library_favorited', 'true');
            }
        });
        
        // 检查是否已收藏
        if (localStorage.getItem('library_favorited') === 'true') {
            favoriteBtn.classList.add('favorited');
        }
    }
    
    // 分享功能
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            shareModal.classList.remove('hidden');
            setTimeout(() => {
                shareModal.classList.add('show');
            }, 10);
        });
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

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderCities();
    renderLibraries();
    initGame();
    initFavoriteAndShare();
}); 