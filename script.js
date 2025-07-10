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
      <h3>${lib.name}</h3>
      <p>📍 ${lib.address}</p>
      <p>📞 ${lib.phone}</p>
    `;
    card.onclick = () => showLibraryDetails(lib);
    libraryListDiv.appendChild(card);
  });
}

function showLibraryDetails(lib) {
  modalContent.innerHTML = `
    <h2>${lib.name}</h2>
    <p><strong>📍 地址：</strong>${lib.address}</p>
    <p><strong>📞 电话：</strong>${lib.phone}</p>
    <p><strong>🌐 官网：</strong><a href="${lib.website}" target="_blank">${lib.website}</a></p>
    <p><strong>📖 简介：</strong>${lib.description}</p>
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

// 初始化
renderCities();
renderLibraries(); 