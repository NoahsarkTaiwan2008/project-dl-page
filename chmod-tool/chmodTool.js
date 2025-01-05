const permissions = [false, false, false, false, false, false, false, false, false]; // r, w, x for owner, group, others

function updateUI() {
    const octalPermissions = [0, 0, 0];
    let accessString = '';

    for (let i = 0; i < permissions.length; i++) {
        const value = permissions[i] ? 1 : 0;
        octalPermissions[Math.floor(i / 3)] = (octalPermissions[Math.floor(i / 3)] << 1) | value;
        accessString += permissions[i] ? ['r', 'w', 'x'][i % 3] : '-';
    }

    const filename = document.getElementById('filename').value;
    document.getElementById('command').textContent = `chmod ${octalPermissions.join('')} ${filename}`;
    document.getElementById('details').textContent = `目前存取權：${accessString}`;
}

function togglePermission(index, type) {
    if (type === '-') {
        permissions[index] = false; // 無權限時將對應權限設為 false
    } else {
        permissions[index] = !permissions[index];
    }
    updateUI();
}

function resetPermissions(group) {
    for (let i = group * 3; i < (group + 1) * 3; i++) {
        permissions[i] = false;
    }
    updateUI();
}

function setMaxPermissions(group) {
    for (let i = group * 3; i < (group + 1) * 3; i++) {
        permissions[i] = true;
    }
    updateUI();
}

function resetAllPermissions() {
    for (let i = 0; i < permissions.length; i++) {
        permissions[i] = false;
    }
    updateUI();
}

function copyCommand() {
    const commandText = document.getElementById('command').textContent;
    navigator.clipboard.writeText(commandText).then(() => {
        alert('指令已複製到剪貼簿');
    });
}

updateUI();