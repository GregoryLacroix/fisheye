export const events = () => {};
export const render = ( photographer, medias ) => {
    
    console.log(medias);

    const content = `
            <section class="gallery">
                ${medias.map(media => {

            const mediaContent = media.image
                ? ` <img class="gallery_thumbnail" src="./assets/images/photographers/samplePhotos-Small/${photographer.name}/${media.image}" alt="${media.title}" data-media=${media.id} aria-label="${media.title}">`
                : ` <video class="gallery_thumbnail" data-media=${media.id} aria-label="${media.title}" >
                        <source src="./assets/images/photographers/samplePhotos-Small/${photographer.name}/${media.video}" class="gallery_video"  type="video/mp4">
                    </video>`;

            return `
                    <article class="gallery_card">                           
                        <a href="#" data-media=${media.id} role="link" aria-label="View media large">
                            <figure>${mediaContent}</figure>
                        </a>
                        <figcaption class="gallery_like">
                            <h2 class="gallery_title">${media.title}</h2>
                                <div role="group" aria-label="Like button and number of likes">
                                    <span class="nbLike" data-id="${media.id}">${media.likes}</span> 
                                    <a href="#" class="btn_like" type="button" aria-label="Like" data-id="${media.id}">
                                        <span class="fas fa-heart icone_heart" aria-hidden="true"></span>
                                    </a> 
                                </div>
                        </figcaption>
                    </article>
                `;
        }).join("")}
            </section >
            <aside class="gallery_total_like">
                <p class="photographer_Likes">
                    <span class="photographer_likes_count"></span>
                    <span class="fas fa-heart icone_heart_total" aria-hidden="true"></span>
                </p>
                <span>${photographer.price}€ / jour</span>
            </aside>
        `;

        return content;
};

export default {
    render,
    events
}