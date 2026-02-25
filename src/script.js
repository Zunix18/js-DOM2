import {
    loadImages,
    clearGallery,
    removeLastImage,
    reverseGalleryFn,
    shuffleGallery
} from "./gallery.js";

// EVENT LISTENERS
document.getElementById("loadMore")
    .addEventListener("click", () => loadImages());

document.getElementById("clearGallery")
    .addEventListener("click", clearGallery);

document.getElementById("removeLast")
    .addEventListener("click", removeLastImage);

document.getElementById("reverseGallery")
    .addEventListener("click", reverseGalleryFn);

document.getElementById("shuffleGallery")
    .addEventListener("click", shuffleGallery);

// Автоматичне перше завантаження
window.addEventListener("DOMContentLoaded", () => loadImages());