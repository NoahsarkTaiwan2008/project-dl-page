// 專案清單資料
const files = [
    { name: 'Project 1', description: 'A modern UI project for beginners.', link: '#1' },
    { name: 'Project 2', description: 'An intermediate-level app template.', link: '#2' },
    { name: 'Project 3', description: 'Advanced features for experienced developers.', link: '#3' },
    { name: 'Project 4', description: 'Responsive and accessible web design.', link: '#4' },
];

// 動態生成專案卡片
const fileList = document.getElementById('fileList');

files.forEach(file => {
    const item = document.createElement('li');
    item.className = 'file-item';
    item.innerHTML = `
        <h2>${file.name}</h2>
        <p>${file.description}</p>
        <button onclick="window.location.href='${file.link}'">Download</button>
    `;
    fileList.appendChild(item);
});

// 深色模式切換
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
