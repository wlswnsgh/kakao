new Swiper('.promotion .swiper', {
    direction: 'horizontal', 
    slidesPerView: 3, 
    spaceBetween: 5, 
    centeredSlides: true,
    navigation: {
      nextEl: '.promotion .swiper-button-next',
      prevEl: '.promotion .swiper-button-prev',
    },
  });