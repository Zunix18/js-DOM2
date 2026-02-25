const usedIds = new Set();

// Генерує випадкове, але унікальне фото
export function getRandomImage() {
    let id;

    do {
        id = Math.floor(Math.random() * 1000) + 1;
    } while (usedIds.has(id));

    usedIds.add(id);
    return `https://picsum.photos/id/${id}/400/300`;
}

// очищення використаних id
export function clearUsedIds() {
    usedIds.clear();
}