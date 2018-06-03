define([
    'jquery', 'banner'
], function ($, banner) {
    return {
        setUpSwiper: function () {
            var mySwiper = new Swiper('.swiper-container', {
                pagination: '.pt-pagination',
                loop: true,
                autoplay : 2000,
                grabCursor: true,
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
    }
});