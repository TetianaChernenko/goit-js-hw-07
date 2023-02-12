import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const imageMarkup = createImageMarkup(galleryItems); 

function createImageMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item"><a class="gallery__link" 
    href = "${original}"><img class="gallery__image" 
    src = "${preview}" data-source = "${original}"
    alt = "${description}" width="340"></img></a></div>`
    }).join("")
};
galleryEl.insertAdjacentHTML("afterbegin", imageMarkup);

galleryEl.addEventListener("click", onImageOriginalCard);

function onImageOriginalCard(e) {
    e.preventDefault();
    if (!e.target.dataset.source) {
          return
    }
    console.log(e.target);
    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`).show(); 
};

console.log(galleryEl);