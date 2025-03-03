const aboutImage = document.querySelector('.about-image');
window.addEventListener('scroll', () => {
    if (isElementInViewport(aboutImage)) {
        aboutImage.classList.add('animate');
    }
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
window.addEventListener("load", function () {
    const image = document.querySelector(".animated-image");

    function checkPosition() {
        if (!image) return; // Kiểm tra nếu ảnh có tồn tại
        const rect = image.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.8) {
            image.classList.add("active");
        }
    }

    window.addEventListener("scroll", checkPosition);
    checkPosition();
});



document.addEventListener('DOMContentLoaded', function () {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const customNavmenu = document.querySelector('.custom-navmenu');

    mobileNavToggle.addEventListener('click', function () {
        customNavmenu.classList.toggle('active');
    });
});