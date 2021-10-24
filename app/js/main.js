const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    autoplay: {
        delay: 2000,
    },
});


$('.faq__btn').on('click', function () {
    $(this).next('.faq__answer').slideToggle();
});