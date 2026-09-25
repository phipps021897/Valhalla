(function () {
  "use strict";

  var items = Array.prototype.slice.call(document.querySelectorAll(".gallery-item"));
  if (!items.length) return;

  var lightbox = document.getElementById("lightbox");
  var lightboxImage = document.getElementById("lightboxImage");
  var lightboxCounter = document.getElementById("lightboxCounter");
  var closeBtn = document.getElementById("lightboxClose");
  var prevBtn = document.getElementById("lightboxPrev");
  var nextBtn = document.getElementById("lightboxNext");

  var current = 0;

  function show(index) {
    current = (index + items.length) % items.length;
    var img = items[current].querySelector("img");
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxCounter.textContent = (current + 1) + " / " + items.length;
  }

  function open(index) {
    show(index);
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  items.forEach(function (item, index) {
    item.addEventListener("click", function () {
      open(index);
    });
  });

  closeBtn.addEventListener("click", close);
  prevBtn.addEventListener("click", function () { show(current - 1); });
  nextBtn.addEventListener("click", function () { show(current + 1); });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) close();
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
})();
