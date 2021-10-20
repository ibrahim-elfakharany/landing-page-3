$(function () {
  $(".toggler").on("click", function () {
    $(".navigator").html($(".links").html());
    $(".navigator").slideToggle();
  });
});
