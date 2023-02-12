import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
const imageMarkup = createImageMarkup(galleryItems); 

function createImageMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" width="340"/>
</a>`
    }).join("")
};
galleryEl.insertAdjacentHTML("afterbegin", imageMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
 });

console.log(galleryEl);
