import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEls = document.querySelector('.gallery');

const createImageItem = ({ preview, original, description }) => {
  return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>    
    `;
};

const arrImages = galleryItems.map(createImageItem).join('');
galleryEls.insertAdjacentHTML('beforeend', arrImages);
// console.log(galleryEls);

galleryEls.addEventListener('click', event => {
  event.preventDefault();
  gallery.on('show.Simplelightbox');
});
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
