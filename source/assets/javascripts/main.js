// Fix animation for anchors to IDs on the same page, need this because the base tag causes the page to be reloaded
document.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", function (e) {
    let href = this.href;
    // Check if it points to the same page we're on
    if (href.includes("#") && href.startsWith(document.location.href)) {
      href = href.substring(href.indexOf("#") + 1);
      document.getElementById(href).scrollIntoView({ behavior: "smooth" });
      e.preventDefault(); // Don't reload page
    }
  }),
);
