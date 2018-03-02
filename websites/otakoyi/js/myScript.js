// Function i found to trigger the progress bar animation when 
// it is visisble by the user
(function ($, win) {
  $.fn.inViewport = function (cb) {
    return this.each(function (i, el) {
      function visPx() {
        var H = $(this).height(),
          r = el.getBoundingClientRect(),
          t = r.top + 100,
          b = r.bottom;
        return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
      }
      visPx();
      $(win).on("resize scroll", visPx);
    });
  };
}(jQuery, window));

// this is where the animation class is added to the progress bars
$(function () {
  $(".sale").inViewport(function (px) {
    if (px) $(this).addClass("saleToRight");
  });
});
$(function () {
  $(".productItem").inViewport(function (px) {
    if (px) $("img").addClass("imgBack");
  });
});

window.addEventListener('DOMContentLoaded', function () {
  var $min = document.querySelector('.real [name="realDPX-min"]');


  $min.DatePickerX.init({
    mondayFirst: true,
    minDate: new Date(2017, 8, 13),
  });

});



//  Initialize Slider  
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });