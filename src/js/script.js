// Implementing swiper.js to #PortfolioCards
const cardSwiper = new Swiper('.portfolioCards', {
    slidesPerView: '3', // Adjust this value to control how many slides are visible at a time
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
