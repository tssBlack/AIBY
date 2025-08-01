import startLang from './startLang.js';
import getLangFromURL from './getLangFromURL.js';

let currentLang = getLangFromURL() || startLang();
document.documentElement.lang = currentLang;
const langFile = `../assets/lang/${currentLang}.json`;

// #?lang
window.addEventListener('hashchange', () => {
    const newLang = getLangFromURL();
    if (newLang && newLang !== currentLang) {
        location.reload();
    }
});

export { currentLang, langFile };