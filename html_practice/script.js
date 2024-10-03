document.addEventListener('DOMContentLoaded', (event) => {
    const items = document.querySelectorAll('carousel-top');
    let currentIndex = 0;

    function showNextItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }

    setInterval(showNextItem, 2000);
});
