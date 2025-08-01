export default function getLangFromURL() {
    const searchParams = new URLSearchParams(window.location.search);
    let lang = searchParams.get('lang');

    if (!lang) {
        const hashParams = new URLSearchParams(window.location.hash.slice(1));
        lang = hashParams.get('lang');
    }
        
    return lang;
}