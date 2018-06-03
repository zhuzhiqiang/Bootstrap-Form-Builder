
function setUpSwiper() {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pt-pagination',
        loop: true,
        grabCursor: true,
        autoplay : 2000,
        paginationClickable: true
    });
    // $('.arrow-left').on('click', function (e) {
    //     e.preventDefault();
    //     mySwiper.swipePrev()
    // });
    // $('.arrow-right').on('click', function (e) {
    //     e.preventDefault();
    //     mySwiper.swipeNext()
    // });
}