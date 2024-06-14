import { getPhotographerMediasById } from "../utils/api.js";

export const DisplayTotalLikes = async() =>  {
    const photographerId = parseInt(new URLSearchParams(window.location.search)?.get("id"));
    const  medias  = await getPhotographerMediasById(photographerId);
    const allBtnLike = document.querySelectorAll(".btn_like");
    const galleryTotalLikes = document.querySelector(".photographer_likes_count");

    const totalLikes = () => {
        const total = medias.reduce(
            (accumulator, media) => accumulator + media.likes,
            0,
        );
        galleryTotalLikes.textContent = total;
    };

    allBtnLike.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            const mediaId = btn.getAttribute('data-id');
            const currentIndex = medias.findIndex(media => media.id == mediaId);

            if(!btn.classList.contains("like")) medias[currentIndex].likes++;

            let mediasLikes = medias[currentIndex].likes;
            const elementMediasLikes = document.querySelector('span[data-id="'+ mediaId+'"]');
            elementMediasLikes.innerHTML = mediasLikes;

            totalLikes();
        });
    });

    totalLikes();
}

