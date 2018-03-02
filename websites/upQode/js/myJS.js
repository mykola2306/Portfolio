// Function i found to trigger the progress bar animation when 
// it is visisble by the user
(function ($, win) {
  $.fn.inViewport = function (cb) {
    return this.each(function (i, el) {
      function visPx() {
        var H = $(this).height(),
          r = el.getBoundingClientRect(),
          t = r.top,
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
  $(".barProgress").inViewport(function (px) {
    if (px) $(this).addClass("triggeredCSS3");
  });
});

// I had big problems with the nested navbar ul elemest
// When product link is clicked, it does not want to jump the product section probably
// because of the nested elements
// So i added on top of it a simplified copy of that element

// Another problem is that when navbar is collapsed by changing the screen window you can still open the nested ul elements
// But if the page is refreshed with and the navbar automatically collapses, you no longer can open the nested ul elements
$(window).resize(function () {
  let linkHidden;
  if ($(window).width() <= 980) {
    linkHidden = $(".linkHidden");
    linkHidden.addClass("displayNone");
  } else {
    $(".linkHidden").removeClass("displayNone");
  }

});

// Another problem is when scrolling to different sections, the product link would not change color
// So i had i had to write a scroll event that checks if the link is active to add a class to change the color
document.addEventListener('scroll', function (event) {
  if ($(".linkHidden").hasClass("active")) {
    $(".linkColor").addClass("anchorColor");

  } else {
    $(".linkColor").removeClass("anchorColor");
  }
}, true /*Capture event*/ );