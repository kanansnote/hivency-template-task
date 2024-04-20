// Implementing swiper.js to #PortfolioCards
const portfolioSwiper = new Swiper('.portfolioCards', {
    slidesPerView: '3', // Adjust this value to control how many slides are visible at a time
    loop: true,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});

const testimonialSwiper = new Swiper('.testimonialCards', {
    slidesPerView: '1', // Adjust this value to control how many slides are visible at a time
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const detailsElements = document.querySelectorAll('.ourFAQDetail');

detailsElements.forEach(details => {
    details.addEventListener('click', () => {
        detailsElements.forEach(otherDetails => {
            if (otherDetails !== details && otherDetails.open) {
                otherDetails.open = false; // Close other open details
            }
        });
    });
});
