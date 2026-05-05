let images = [];
let current = 0;

/* LOAD JSON */
fetch("images.json")
  .then(res => res.json())
  .then(data => {
    images = data;
    showImage();
  });

function showImage() {
  const img = document.getElementById("mainImage");

  img.src = `https://drive.google.com/uc?export=view&id=${images[current]}`;
}

function next() {
  current = (current + 1) % images.length;
  showImage();
}

function prev() {
  current = (current - 1 + images.length) % images.length;
  showImage();
}

/* DOWNLOAD CURRENT IMAGE */
function downloadCurrent() {
  const link = `https://drive.google.com/uc?export=download&id=${images[current]}`;
  window.open(link, "_blank");
}
