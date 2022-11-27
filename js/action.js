$("#banner-carousel").owlCarousel({
    loop: true,
    items: 1,
    center: true,
    lazyLoad: true,
    dots: true,
    nav : true
  });
  $('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:false,
    dots:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:6
      }
    }
  })
  $('.brand-carousel2').owlCarousel({
    loop:true,
    margin:10,
    rtl:true,
    autoplay:true,
    nav:false,
    dots:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:6
      }
    }
  })