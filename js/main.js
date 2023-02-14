jQuery(document).ready(function ($) {
  "use strict";
  // AOS.init();

  /* ..............................................
       Page loading animation
   .............................................. */
  $(window).on("load", function () {
    $("#js-preloader").delay(500).fadeOut(300);
  });

  /* ..............................................
      Padding header when scroll
   .............................................. */

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".main-banner").height();
    var header = $("header").height();

    if (scroll >= box - header) {
      $("header").addClass("header-padding");
    } else {
      $("header").removeClass("header-padding");
    }
  });

  /* ..............................................
     Slick slide
     .............................................. */
  $(".loop").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    nav: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      320: {
        items: 16,
      },
      560: {
        items: 16,
      },
      740: {
        items: 12,
      },
      960: {
        items: 4,
      },
    },
  });

  /* ..............................................
            Scroll
  .............................................. */
  $(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('.navbar-item a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $(".navbar-item a").each(function () {
        $(this).removeClass("active");
      });
      $(this).addClass("active");

      var target = this.hash,
        menu = target;
      var target = $(this.hash);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top + 1,
          },
          500,
          "swing",
          function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
          }
        );
    });
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $(".navbar-link").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".navbar-link").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }
});
