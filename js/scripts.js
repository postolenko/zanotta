function getSubMenuParams() {
  heigth = [];
  $(".sub_menu_2").each(function() {
    parent = $(this).closest(".sub_menu");
    topCoord = $(this).offset().top -  parent.offset().top;
    $(this).css({
      "top" : -1 * topCoord + "px"
    });
    elemHeight = $(this).height();
    heigth.push(elemHeight);
  });
  maxHeight = Math.max.apply(null, heigth);
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {

});

$(window).resize(function() {
  getSubMenuParams();
});

$(document).scroll(function() {

});

$(document).ready(function() {

  getSubMenuParams();

  if( $(".promo_slider").length > 0 ) {
      $(".promo_slider").not(".slick-initialized").slick({
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true
      });
  }

  if( $(".slider_2").length > 0 ) {
    $(".slider_2").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 5,
        variableWidth: true
    });
  }

  if( $(".slider_3").length > 0 ) {
    $(".slider_3").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 3,
    });
  }

  $(".main_nav li").mouseover(function() {
    subMenu = $(this).children(".sub_menu");
    maxLeftCoord = $(this).offset().left + subMenu.width();
    if(maxLeftCoord >= bodyWidth - 30) {
      subMenu.addClass("rightPosition");
    }
  });

  $(".main_nav li").mouseleave(function() {
    subMenu = $(this).children(".sub_menu");
    subMenu.removeClass("rightPosition");
  });

  $(".sub_menu_list li").mouseover(function() {
    parent = $(this).closest(".sub_menu");
    parent.addClass("hoverHeight");
    height = $(this).children(".sub_menu_2").height();
    $(".sub_menu.hoverHeight").css({
      "min-height" : height + "px"
    });
  });

  $(".sub_menu_list li").mouseleave(function() {
    parent = $(this).closest(".sub_menu");
    $(".sub_menu.hoverHeight").css({
      "min-height" : "auto"
    });
    parent.removeClass("hoverHeight");
    parent.removeClass("rightPosition");
  });

  // --------

  $(".hearth_link").on("click", function(e) {
    e.preventDefault();
    console.log("hearth");
  });

});