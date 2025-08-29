// theme_settings_combined.js

const themes = {
    blue: {
        bodyBg: '#e6f0ff',
        containerBg: '#fffefb',
        buttonBg: '#4a90e2',
        buttonHover: '#357ABD',
        cardBg: '#fdf6f0',
        resultBg: '#eaf4ff',
        canvasBg: '#f0f7ff'
    },
    red: {
        bodyBg: '#fff5f0',
        containerBg: '#fff8f5',
        buttonBg: '#FF6F61',
        buttonHover: '#E55A4F',
        cardBg: '#FFE5B4',
        resultBg: '#FFD9C4',
        canvasBg: '#FFF1E0'
    },
    green: {
        bodyBg: '#eafaf1',
        containerBg: '#f0f7f0',
        buttonBg: '#3B7A57',
        buttonHover: '#2E5D41',
        cardBg: '#A6D2BD',
        resultBg: '#CFF5E1',
        canvasBg: '#D9EFE7'
    },
    purple: {
        bodyBg: '#f5f0fa',
        containerBg: '#f7f2fd',
        buttonBg: '#8E44AD',
        buttonHover: '#70378C',
        cardBg: '#D2B4DE',
        resultBg: '#F3E6FA',
        canvasBg: '#EDE0F7'
    }
};

function applyTheme(themeName) {
    const theme = themes[themeName];
    if(!theme) return;

    document.body.style.backgroundColor = theme.bodyBg;
    document.querySelectorAll('.container').forEach(c => c.style.backgroundColor = theme.containerBg);
    document.querySelectorAll('button').forEach(b => {
        b.style.backgroundColor = theme.buttonBg;
        b.onmouseover = () => b.style.backgroundColor = theme.buttonHover;
        b.onmouseout = () => b.style.backgroundColor = theme.buttonBg;
    });
    document.querySelectorAll('.calculator, .graph').forEach(c => c.style.backgroundColor = theme.cardBg);
    document.querySelectorAll('.result').forEach(r => r.style.backgroundColor = theme.resultBg);
    document.querySelectorAll('canvas').forEach(cv => cv.style.backgroundColor = theme.canvasBg);

    updateCurrentThemeText(themeName);
    localStorage.setItem('selectedTheme', themeName);
}

function updateCurrentThemeText(themeName) {
    const themeTextMap = {
        blue: '블루',
        red: '레드',
        green: '그린',
        purple: '퍼플'
    };
    const currentThemeElem = document.getElementById('currentTheme');
    if(currentThemeElem) currentThemeElem.textContent = `현재 테마: ${themeTextMap[themeName]}`;
}

window.onload = () => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'blue';
    applyTheme(savedTheme);
    const themeSelector = document.getElementById('themeSelector');
    if(themeSelector) themeSelector.value = savedTheme;
};
function showTab(tabName) {
    document.querySelectorAll('.container').forEach(c => {
        c.classList.add('hidden');
        c.style.opacity = 0;
    });
    const tab = document.getElementById(tabName);
    tab.classList.remove('hidden');
    setTimeout(() => tab.style.opacity = 1, 10);
}