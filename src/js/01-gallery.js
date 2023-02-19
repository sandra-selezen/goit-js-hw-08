// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryItemEl = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryItemEl);

function createGalleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) => 
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    ).join("");
}

let lightBox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
});

lightBox.on('show.simplelightbox', function () {
    console.log(lightBox);
});

lightBox.on('error.simplelightbox', function (event) {
	console.log(event); // some usefull information
});

/*

1. Add the SimpleLightbox library as a project dependency using npm.
2. Use your JavaScript code from the previous homework, 
but refactor it given that the library was installed via npm (import/export syntax).

*/