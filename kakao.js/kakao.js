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
    if (window.scrollY > 1141) {
      gsap.to(savingsEl, 0.5, {
        opacity: 1,
        x: -100
      });
    } else { 

    }

  });

  const foreigEl = document.querySelector('.foreig');
  window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if (window.scrollY > 3086) {
      gsap.to(foreigEl, 1, {
        opacity: 1,
        y: -300
      });
    } else { 

    }

  });