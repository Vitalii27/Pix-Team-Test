var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
});

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,

});

if ($('#form__map').length) {
    var formMail = new MyForm($('#form__map'), '/send-form.php');
    formMail.init();
}
if ($('#form__press').length) {
    var formMail = new MyForm($('#form__press'), '/login.php');
    formMail.init();
}