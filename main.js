import queryLang from "./modules/queryLang.js";
import activeOffer from "./modules/activeOffer.js";

document.addEventListener('DOMContentLoaded', () => {
    // offer
    activeOffer();
    // lang query
    queryLang();
});