$(function(){

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  var swiper = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 150,
        navigation: {
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        },
        breakpoints:{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
            arrow: false
          },
          992: {
            slidesPerView: 2,
          }
        },

      });
});
