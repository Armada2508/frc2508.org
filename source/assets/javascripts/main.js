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
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
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
      const modelViewer = document.getElementById("cad-viewer");
      modelViewer.setAttribute("poster", "assets/images/robots/2024.jpg"); //? Should be dynamic
      modelViewer.setAttribute("src", "assets/models/" + modelName + ".glb");
    }
  }
});
