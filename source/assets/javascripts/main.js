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
  if (document.location.pathname.includes("/cad")) {
    const modelName = window.location.search.substring(1);
    if (modelName) {
      const modelViewer = document.getElementById("cad-viewer");
      modelViewer.setAttribute("poster", "assets/images/robots/2024.jpg"); //? Should be dynamic
      modelViewer.setAttribute("src", "assets/models/" + modelName + ".glb");
    }
  }
});
