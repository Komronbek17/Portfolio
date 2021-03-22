let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode) {
    const direct = document.getElementById('theme-style');

    if (mode == 'light') {
        direct.href = 'default.css';
    } else {
        direct.href = mode + '.css';
    }

    localStorage.setItem('theme', mode);
}