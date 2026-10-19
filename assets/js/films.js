(function () {
  // Films load only when played: a thumbnail until then, no YouTube iframe on page load.
  document.querySelectorAll(".film-frame").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var frame = document.createElement("iframe");
      frame.src =
        "https://www.youtube-nocookie.com/embed/" +
        btn.dataset.video +
        "?autoplay=1&rel=0";
      frame.title = btn.dataset.title;
      frame.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      frame.allowFullscreen = true;
      frame.className = "film-frame";
      btn.replaceWith(frame);
      frame.focus();
    });
  });
})();
