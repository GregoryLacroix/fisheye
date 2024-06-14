export const events = () => {};
export const render = ( photographer ) => {
    
    return `
        <header class="header__page__photograph">
            <a href="index.html"><img src="assets/images/logo.webp" class="header__logo" alt="fisheye logo"/></a>
            <div class="header__content">
                <div class="header__photograph__profil">
                    <h2 class="title__photograph">${photographer.name}</h2>
                    <p class="header__profil__city">${photographer.city}, ${photographer.country}</p>
                    <p class="header__profil__tagline">${photographer.tagline}</p>
                </div>
                <div class="photograph-header">
                    <button class="contact_button">Contactez-moi</button>
                </div>
                <img class="main__picture__photographer" src="assets/images/photographers/thumbnails/${photographer.portrait}" />
            </div>
        </header>
        `;
    
};

export default {
    render,
    events
}