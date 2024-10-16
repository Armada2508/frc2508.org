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

// Handles the internal link redirection for the github pull request previews
$("a[href^='/']").click(function () {
  const prefix = document.body.dataset.path_prefix;
  const href = $(this).attr("href");
  console.log(prefix + href);
  $(this).attr("href", prefix + href);
});
