export default function prices() {
    const prices = {
        yearly: "$39.99",
        bestOffer: "$0.48",
        weekly: "$6.99"
    };

    for (const e in prices) {
        const q = document.querySelector(`[data-price="${e}"]`);
        if (q) {
            q.innerHTML = q.innerHTML.replace('{{price}}', prices[e]);
        }
    }
    document.querySelectorAll('.priceChanger').forEach(e => {
        e.classList.remove('priceChanger');
    })
}