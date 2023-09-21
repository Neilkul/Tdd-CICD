(function($) {
  "use strict";
  /*  Preloader */
  $(window).on('load', function() {
      var preLoder = $(".preloader");
      preLoder.fadeOut(1500);
  });
  /*  Active Class*/
  $('.header-cart,.sidebar-close').on('click', function() {
      $("#sidebar-navbar").toggleClass('active');
      $("body").toggleClass('sidebar-before-bg');
  });
  /*  Fixed Header*/
  $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
          $(".header-area").addClass("fixed");
      } else {
          $(".header-area").removeClass("fixed");
      }
  });
  /*  Mean Menu */
  $('.header-navbar-mobile').meanmenu({
      meanScreenWidth: "991",
      meanMenuContainer: '.header-navbar',
      meanMenuOpen: "<span></span><span></span><span></span>",
      meanMenuClose: "<span></span><span></span><span></span>",
      siteLogo: " ",
  });
  /*  Hero Shop Slider  */
  $('.hero-shop-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      prevArrow: "<button type='button' class='slick-prev'><img src='assets/images/slider-arrow.svg' alt='title'></button>",
      nextArrow: "<button type='button' class='slick-next'><img src='assets/images/slider-arrow.svg' alt='title'></button>",
      fade: false,
      asNavFor: '.hero-shop-thumbnail',
      accessibility: false,
      draggable: false,
  });

  $('.hero-shop-thumbnail').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.hero-shop-slider',
      dots: false,
      arrows: false,
      focusOnSelect: true,
      accessibility: false,
      draggable: false,
  });
  $('.hero-shop-thumbnail .slick-slide').removeClass('slick-active');
  $('.hero-shop-thumbnail .slick-slide').eq(0).addClass('slick-active');
  $('.hero-shop-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      var mySlideNumber = nextSlide;
      $('.hero-shop-thumbnail .slick-slide').removeClass('slick-active');
      $('.hero-shop-thumbnail .slick-slide').eq(mySlideNumber).addClass('slick-active');
  });
  /* Podcast Slider */
  $('.product-slider').slick({
      autoplay: false,
      autoplayspeed: 2000,
      slidesToShow: 4,
      dots: false,
      arrows: true,
      prevArrow: "<button type='button' class='slick-prev'><img src='assets/images/slider-arrow.svg' alt='title'></button>",
      nextArrow: "<button type='button' class='slick-next'><img src='assets/images/slider-arrow.svg' alt='title'></button>",
      responsive: [{
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 1000,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
              breakpoint: 650,
              settings: {
                  slidesToShow: 1,
              }
          }
      ]
  });
  /* Company Slider */
  $('.company-slider').slick({
      autoplay: true,
      autoplayspeed: 2000,
      slidesToShow: 4,
      dots: false,
      arrows: true,
      prevArrow: "<button type='button' class='slick-prev'><img src='assets/images/slider-arrow.svg' alt='title'></button>",
      nextArrow: "<button type='button' class='slick-next'><img src='assets/images/slider-arrow.svg' alt='title'></button>",
      responsive: [{
              breakpoint: 991,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 2,
              }
          }
      ]
  });
  /* Fitvids Js */
  fitvids('.container');
  /* Aos Js */
  AOS.init({
      offset: 200,
      delay: 50,
      duration: 1000,
      easing: 'ease',
      once: true,
      mirror: true,
      anchorPlacement: 'top-center',
  });
  /*  Append Shop  */
  $('.infinite-container').infiniteScroll({
      path: function() {
          if (this.loadCount < 4) {
              let nextIndex = this.loadCount + 2;
              return `blog/blog-${nextIndex}.html`;
          }
      },
      append: '.blog',
      button: '.load-more-btn',
      checkLastPage: false,
      scrollThreshold: false,
      status: '.page-load-status',
      history: false,
  });
  $('.infinite-container2').infiniteScroll({
      // options
      path: function() {
          // no value returned after 4th loaded page
          if (this.loadCount < 4) {
              let nextIndex = this.loadCount + 2;
              return `shop/shop-${nextIndex}.html`;
          }
      },
      append: '.shop',
      button: '.load-more-btn',
      checkLastPage: false,
      scrollThreshold: false,
      status: '.page-load-status',
      history: false,
  });
  $('.infinite-container3').infiniteScroll({
      // options
      path: function() {
          // no value returned after 4th loaded page
          if (this.loadCount < 4) {
              let nextIndex = this.loadCount + 2;
              return `team/team-${nextIndex}.html`;
          }
      },
      append: '.team',
      button: '.load-more-btn',
      checkLastPage: false,
      scrollThreshold: false,
      status: '.page-load-status',
      history: false,
  });

  /*  current date show  */
  $('#spanYear').html(new Date().getFullYear());
  /*  Product Count  */
  $('.product-count .minus').on("click", function() {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.on("change");
      return false;
  });
  $('.product-count .plus').on("click", function() {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.on("change");
      return false;
  });
  /*  MediumZoom  */
  const zoom = mediumZoom('[data-zoomable]', {
      background: 'rgba(30, 29, 35, 0.6)'
  })
  /*  Image-popup  */
  $('.image-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom',
      image: {
          verticalFit: true
      },
      zoom: {
          enabled: true,
          duration: 300
      }
  });
  /*  Ajax-popup  */
  $('.product-ajax-popup').magnificPopup({
      type: 'ajax',
      alignTop: false,
      overflowY: 'scroll' 
  });
  /*  Scrolltop  */
  function scrolltop() {
      var wind = $(window);
      wind.on("scroll", function() {
          var scrollTop = wind.scrollTop();
          if (scrollTop >= 500) {
              $(".footer-back").addClass("show");
          } else {
              $(".footer-back").removeClass("show");
          }

      });
      $(".footer-back").on("click", function() {
          var bodyTop = $("html, body");
          bodyTop.animate({
              scrollTop: 0
          }, 500, "easeOutCubic");
      });
  }
  scrolltop();
  /*  Isotope  */
  $(window).on('load', function() {
      var $grid = $('.filter-container').isotope({
          itemSelector: '.filter-item',
          layoutMode: 'fitRows'
      })
      // filter functions 
      var filterFns = {
          // show if number is greater than 50
          numberGreaterThan50: function() {
              var number = $(this).find('.number').text();
              return parseInt(number, 10) > 50;
          },
          // show if name ends with -ium
          ium: function() {
              var name = $(this).find('.name').text();
              return name.match(/ium$/);
          }
      };
      // bind filter button click 
      $('.filters-button-group').on('click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          // use filterFn if matches value
          filterValue = filterFns[filterValue] || filterValue;
          $grid.isotope({
              filter: filterValue
          });
      });
      // change is-checked class on buttons
      $('.button-group').each(function(i, buttonGroup) {
          var $buttonGroup = $(buttonGroup);
          $buttonGroup.on('click', 'button', function() {
              $buttonGroup.find('.is-checked').removeClass('is-checked');
              $(this).addClass('is-checked');
          });
      });


  });


}(jQuery));