document.addEventListener('DOMContentLoaded', function(){
  new WOW().init();

  $(function(){                                   //scroll
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
    });
    
    const swiper = new Swiper('.hero-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        //centeredSlides: true,
        loop: true,
        lazyLoading: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
       });

       const swiper1 = new Swiper('.partners-slider', {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 4000,
        },
        lazyLoading: true,
       breakpoints: {
        690: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
         760: {
           slidesPerView: 4,
           spaceBetween: 20,
         },
         860: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1160: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1360: {
          slidesPerView: 8,
          spaceBetween: 20,
        },
       }
       });

}); //end script