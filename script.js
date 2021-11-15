var swiperWeb = new Swiper(".swiper-web", {
    slidesPerView: 'auto',
    spaceBetween: 39,
    loop: true,
    speed:4000,
    simulateTouch:false,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
  });

  var swiperProgramme = new Swiper(".swiper-programme", {
    slidesPerView: 'auto',
    spaceBetween: 39,
    loop: true,
    speed:4000,
    simulateTouch:false,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
  });


  const animation= gsap.timeline({
    defaults: { 
      y: '50px',
      ease: 'none',
      repeat:-1,
      yoyo:true,
      duration:1
    }
  })
    .from('.prenomK', {})
    .from('.prenomA', {}, "<0.2")
    .from('.prenomR', {}, "<0.2")
    .from('.prenomI', {}, "<0.2")
    .from('.prenomN', {}, "<0.2")
    .from('.prenomE', {}, "<0.2")
    .from('.nomC', {}, "<0.4")
    .from('.nomO', {}, "<0.2")
    .from('.nomR1', {}, "<0.2")
    .from('.nomM', {}, "<0.2")
    .from('.nomI', {}, "<0.2")
    .from('.nomE', {}, "<0.2")
    .from('.nomR2', {}, "<0.2");

animation.play();
