import { getPhotographerMediasById, getPhotographerById } from "../utils/api.js";

export const DisplayLightbox = async() =>  {

    const photographerId = parseInt(new URLSearchParams(window.location.search)?.get("id"));
    const  medias  = await getPhotographerMediasById(photographerId);
    const  photographer  = await getPhotographerById(photographerId);
    const modalbg = document.querySelector(".bground");
    const modalbuttonClose = document.querySelector(".cross_close");
    const galleryMedias = document.querySelectorAll(".gallery_thumbnail");
    const buttonNext = document.querySelector(".btn_next");
    const buttonPrevious = document.querySelector(".btn_previous");
    const lightboxMedia = document.querySelector('.block_lightbox_picture');
    let currentIndex = 0; 

    galleryMedias.forEach(item => {

        let mediaId = item.getAttribute('data-media');
        item.addEventListener('click' , (event) => {
            event.preventDefault();
            modalbg.classList.remove('modalclose');
            modalbg.style.display = "block";
            const mediaIndex = medias.findIndex(media => media.id == mediaId);
            currentIndex = mediaIndex;

            (medias[currentIndex].video) ? lightboxMedia.innerHTML = `<video class="gallery_thumbnail lightbox_video" aria-label="" controls autoplay muted loop>
                <source src="./assets/images/photographers/samplePhotos-Small/${photographer.name}/${medias[currentIndex].video}" class="gallery_video lightbox_item" type="video/mp4">
            </video>` : lightboxMedia.innerHTML = `<img src="./assets/images/photographers/samplePhotos-Small/${photographer.name}/${medias[currentIndex].image}" class="ligthbox_picture lightbox_item" aria-label="lightbox_item" alt="${medias[currentIndex].title}">`;

            const lightBoxMediaTitle = document.querySelector('.footer_title');
            lightBoxMediaTitle.textContent = medias[currentIndex].title;
        });
    });

    const nextMedia = () => {
        currentIndex++;
        if (currentIndex > medias.length - 1) currentIndex = 0;

        (medias[currentIndex].video) ? lightboxMedia.innerHTML = `<video class="gallery_thumbnail lightbox_video" aria-label="" controls autoplay muted loop>
            <source src="./assets/images/photographers/samplePhotos-Small/${photographer.name}/${medias[currentIndex].video}" class="gallery_video lightbox_item" type="video/mp4">
        </video>` : lightboxMedia.innerHTML = `<img src="./assets/images/photographers/samplePhotos-Small/${photographer.name}/${medias[currentIndex].image}" class="ligthbox_picture lightbox_item" aria-label="lightbox_item" alt="${medias[currentIndex].title}">`;

        const lightBoxMediaTitle = document.querySelector('.footer_title');
        lightBoxMediaTitle.textContent = medias[currentIndex].title;
    };

    const previousMedia = () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = medias.length - 1;

        (medias[currentIndex].video) ? lightboxMedia.innerHTML = `<video class="gallery_thumbnail lightbox_video" aria-label="" controls autoplay muted loop>
        <source src="./assets/images/photographers/samplePhotos-Small/${photographer.name}/${medias[currentIndex].video}" class="gallery_video lightbox_item" type="video/mp4">
        /video>` : lightboxMedia.innerHTML = `<img src="./assets/images/photographers/samplePhotos-Small/${photographer.name}/${medias[currentIndex].image}" class="ligthbox_picture lightbox_item" aria-label="lightbox_item" alt="${medias[currentIndex].title}">`;

        const lightBoxMediaTitle = document.querySelector('.footer_title');
        lightBoxMediaTitle.textContent = medias[currentIndex].title;
    };

    const closeLightbox = () => {
        modalbg.classList.add('modalclose');
    };

    document.addEventListener('keyup', e => {
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                previousMedia();
                break;
            case 'ArrowRight':
                nextMedia();
                break;
        };
    });

    buttonNext.addEventListener('click', () => nextMedia());
    buttonPrevious.addEventListener('click', () => previousMedia());

    modalbuttonClose.addEventListener('click' , (event) => {
        modalbg.classList.add('modalclose');
    });

}