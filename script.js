const fileList = document.getElementById('fileList');

fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        data.files.forEach(file => {
            const item = document.createElement('li');
            item.className = 'file-item';

            let osIcon = '';
            switch (file.os) {
                case 'windows':
                    osIcon = '<i class="fab fa-windows"></i>';
                    break;
                case 'mac':
                    osIcon = '<i class="fab fa-apple"></i>';
                    break;
                case 'linux':
                    osIcon = '<i class="fab fa-linux"></i>';
                    break;
                default:
                    osIcon = '';
            }

            item.innerHTML = `
                <h2>${file.name} ${osIcon}</h2>
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

const darkModeToggle = document.getElementById('darkModeToggle');

// 監聽按鈕點擊事件以切換深色模式
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // 儲存使用者的選擇到 localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// 偵測使用者的瀏覽器風格並自動切換模式
const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
} else if (userPrefersDark.matches) {
    document.body.classList.add('dark-mode');
}

// 監聽瀏覽器風格變化並即時切換模式
userPrefersDark.addEventListener('change', (e) => {
    if (e.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const toolsButton = document.getElementById('toolsButton');
    const toolsPopup = document.getElementById('toolsPopup');

    toolsButton.addEventListener('click', () => {
        toolsPopup.classList.toggle('show');
    });

    window.addEventListener('click', (event) => {
        if (!toolsButton.contains(event.target) && !toolsPopup.contains(event.target)) {
            toolsPopup.classList.remove('show');
        }
    });
});