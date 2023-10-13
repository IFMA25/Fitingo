new Swiper('.slide-card',{
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    breakpoints: {
        365:{
            slidesPerView: 1.25,
            spaceBetween: 20,
          },
        440:{
            slidesPerView: 1.4,
            spaceBetween: 32,
          },
        540:{
            slidesPerView: 2,
            spaceBetween: 32,
          },
        662:{
            slidesPerView: 2.3,
            spaceBetween: 32,
          },
        800:{
            slidesPerView: 3,
            spaceBetween: 20,
          },
        952: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
});
