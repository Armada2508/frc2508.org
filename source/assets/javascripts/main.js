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

$(document).ready(() => {
  if (document.location.pathname.startsWith("/cad")) {
    window.onhashchange = () => window.location.reload();
    const modelName = window.location.hash.substring(1);
    if (modelName) {
      document
        .getElementById("cad-viewer")
        .setAttribute("src", "assets/models/" + modelName + ".glb");
    }
  }
});
