export default function activeOffer() {
    const offers = document.querySelectorAll('.offer.btns');
    const badge = document.querySelector('.badge');

    offers.forEach(el => {
        el.addEventListener('click', () => {
            offers.forEach(otherEl => {
                otherEl.classList.remove('active');
            })
            el.classList.add('active');
            if(el.classList.contains('best-offer')) {
                badge.classList.add('active');
            }
            else{
                badge.classList.remove('active');
            }
        })
    });
}