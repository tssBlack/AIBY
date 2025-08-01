import { currentLang, langFile } from './langConfig.js';
import prices from './prices.js';

export default function queryLang() {
    // load file
    async function loadLang() {
        try {
            const response = await fetch(langFile);
            if (!response.ok) throw new Error('Failed to load lang file');
            return await response.json();
        } catch {
            console.warn('Lang file not found');
            const response = await fetch('../assets/lang/en.json');
            return await response.json();
        }
    }

    // load translate & prices
    loadLang().then(translations => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[key]) {
                el.innerHTML = translations[key];
            }
        });
        prices();
    });
}
