// AS: initializing main navigation and gallery plugins
$(document).ready(function ($) {
  // MF: toggle navigation menu on click
  $(".js-main-nav-button").on("click tap", function () {
    $("#main-nav").toggleClass("is-open");
  });

  // AS: initializing magnific popup for image gallery
  $(".js-gallery").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

