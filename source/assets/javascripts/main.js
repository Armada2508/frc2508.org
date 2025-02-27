$("body").scrollspy({
  target: "#nav",
  offset: 40,
});

$(".carousel").each(function () {
  var speed = 5000;
  if ($(this).data("rel-speed") != null) {
    speed = $(this).data("rel-speed");
  }
  $(this).carousel({
    interval: speed,
  });
});

$("a").click(function () {
  let href = $.attr(this, "href");
  // Fix animation for anchors to IDs on the same page, need this because of base tag
  if (href.includes("#")) {
    href = href.substring(href.indexOf("#"));
  }
  $("html, body").animate(
    {
      scrollTop: $(href).offset().top,
    },
    500,
  );
  return false;
});
