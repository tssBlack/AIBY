export default function startLang() {
    const langArray = ['de', 'en', 'es', 'fr', 'ja', 'pt'];
    let lang = navigator.language.split('-')[0];
    return langArray.includes(lang) ? lang : 'en';
}