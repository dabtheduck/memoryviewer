let images = [];
let current = 0;

/* ================= LOAD JSON ================= */
fetch("images.json")
  .then(res => res.json())
  .then(data => {
    images = data;

    if (images.length > 0) {
      showImage();
      buildGallery(); // optional if you still want grid usage later
    }
  });

/* ================= LIGHTBOX (MAIN VIEW) ================= */
function showImage() {
  const img = document.getElementById("mainImage");

  const fullImage = `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;
  img.src = fullImage;
}

/* ================= NAVIGATION ================= */
function next() {
  current = (current + 1) % images.length;
  showImage();
}

function prev() {
  current = (current - 1 + images.length) % images.length;
  showImage();
}

/* ================= DOWNLOAD CURRENT IMAGE ================= */
function downloadCurrent() {
  const link = `https://drive.google.com/uc?export=download&id=${images[current]}`;
  window.open(link, "_blank");
}
