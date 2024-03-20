new Swiper('.promotion .swiper', {
    direction: 'horizontal', 
    slidesPerView: 3, 
    spaceBetween: 5, 
    // centeredSlides: true,
    navigation: {
      nextEl: '.promotion .swiper-button-next',
      prevEl: '.promotion .swiper-button-prev',
    },
  });

  const savingsEl = document.querySelector('.savings');
  window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if (window.scrollY > 150) {
      gsap.to(savingsEl, 1, {
        opacity: 1,
        x: -100
      });
    } else { 

    }
  });
