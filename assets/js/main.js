$(function () {
  let navigator = $(".navigator");
  let toggler = $(".toggler");
  
  toggler.on("click", function () {
    navigator.html($(".links").html());
    navigator.slideToggle();
  });
  $(window).on("resize", function () {
    if (toggler.css("display") == "none") {
      navigator.hide();
    }
  });
});

let prog = document.querySelector(".the-progress");
let spans = document.querySelectorAll(".the-progress span");

window.onscroll = function () {
  if (window.scrollY >= prog.offsetTop - 300) {
    spans.forEach((span) => {
      span.style.cssText = `opacity:1;color:#fff;width:${span.dataset.width}`;
    });
  }
};
