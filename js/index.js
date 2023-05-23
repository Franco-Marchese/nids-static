const images = [
    "img/hero/hero a.png",
    "img/hero/hero b.png",
]

const img = document.createElement("img");
img.src = images[0];
const container = document.getElementById("image-ctn");
container.appendChild(img)