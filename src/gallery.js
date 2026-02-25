import { getRandomImage, clearUsedIds } from "./api.js";

const gallery = document.getElementById("gallery");

// Додає N картинок
export function loadImages(n = 4) {
    for (let i = 0; i < n; i++) {
        const img = document.createElement("img");
        img.src = getRandomImage();
        gallery.appendChild(img);
    }
}

// Очищає галерею
export function clearGallery() {
    gallery.innerHTML = "";
    clearUsedIds();
}

// Видаляє останнє фото
export function removeLastImage() {
    const images = gallery.querySelectorAll("img");
    if (images.length > 0) {
        images[images.length - 1].remove();
    }
}

// Перевернути галерею
export function reverseGalleryFn() {
    const images = Array.from(gallery.children);
    images.reverse().forEach(img => gallery.appendChild(img));
}

// Перемішати галерею
export function shuffleGallery() {
    const images = Array.from(gallery.children);

    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }

    images.forEach(img => gallery.appendChild(img));
}