$(function(){

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  var swiper = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 180,
        // Стрелки
          navigation: {
        },
      });
});
