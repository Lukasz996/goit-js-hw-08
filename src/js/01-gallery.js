import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Change code below this line


const gallery = document.querySelector('.gallery')
    const imagesHTML = galleryItems.map((item) => {
        return `<a class='gallery__item' href='${item.original}'>
        <img class='gallery__image' src='${item.preview}' alt='${item.description}' />
         </a>`;
      });
      gallery.insertAdjacentHTML('beforeend', imagesHTML.join(''));
    
      const lightbox = new SimpleLightbox('.gallery a', {
        loop: true,
        captionsData: 'alt',
        captionDelay: 250,
        docClose: true,
        alertErrorMessage: 'Image not found, next image will be loaded'
      });



