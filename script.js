// 取得顯示專案清單的容器
const fileList = document.getElementById('fileList');

// 使用 Fetch API 從 projects.json 載入資料
fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        // 根據載入的資料生成專案項目
        data.files.forEach(file => {
            const item = document.createElement('li');
            item.className = 'file-item';
            item.innerHTML = `
                <h2>${file.name}</h2>
                <p>${file.description}</p>
                <div class="button-container">
                    <a href="${file.link}" target="_blank"><button><i class="fas fa-download"></i></button></a>
                    <a href="${file.github}" target="_blank"><button><i class="fab fa-github"></i></button></a>
                </div>
            `;
            fileList.appendChild(item);
        });
    })
    .catch(error => {
        console.error('載入專案資料時發生錯誤:', error);
    });

// 取得深色模式切換按鈕
const darkModeToggle = document.getElementById('darkModeToggle');

// 監聽按鈕點擊事件以切換深色模式
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});