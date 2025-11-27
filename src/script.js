const gallery = document.getElementById("gallery");
const usedIds = new Set();

// Генерує випадкове, але унікальне фото
function getRandomImage() {
    let id;
    do {
        id = Math.floor(Math.random() * 1000) + 1;
    } while (usedIds.has(id));

    usedIds.add(id);
    return `https://picsum.photos/id/${id}/400/300`;
}

// Додає N картинок
function loadImages(n = 4) {
    for (let i = 0; i < n; i++) {
        const img = document.createElement("img");
        img.src = getRandomImage();
        gallery.appendChild(img);
    }
}

// Очищає галерею
function clearGallery() {
    gallery.innerHTML = "";
    usedIds.clear();
}

// Видаляє останнє фото
function removeLastImage() {
    const images = gallery.querySelectorAll("img");
    if (images.length > 0) {
        images[images.length - 1].remove();
    }
}

// Перевернути галерею
function reverseGalleryFn() {
    const images = Array.from(gallery.children);
    images.reverse().forEach(img => gallery.appendChild(img));
}

// Перемішати галерею
function shuffleGallery() {
    const images = Array.from(gallery.children);
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    images.forEach(img => gallery.appendChild(img));
}

// EVENT LISTENERS
document.getElementById("loadMore").addEventListener("click", () => loadImages());
document.getElementById("clearGallery").addEventListener("click", clearGallery);
document.getElementById("removeLast").addEventListener("click", removeLastImage);
document.getElementById("reverseGallery").addEventListener("click", reverseGalleryFn);
document.getElementById("shuffleGallery").addEventListener("click", shuffleGallery);

// Автоматичне перше завантаження
window.addEventListener("DOMContentLoaded", () => loadImages());

