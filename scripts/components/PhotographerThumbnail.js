export const events = () => {};
export const render = ( photographer ) => {

console.log(photographer);

  return `
    <article class="main__article">
        <a href="/photographer.html?id=${photographer.id}" class="link__photographer">
            <img class="main__picture__photographer" src="assets/images/photographers/thumbnails/${photographer.portrait}" />
            <h2 class="title__photographer">${photographer.name}</h2>
            <p class="main__article__city">${photographer.city}, ${photographer.country}</p>
            <p class="main__article__tagline">${photographer.tagline}</p>
            <span class="main__article__price">${photographer.price}€/jour</span>
        </a>    
    </article>
    `;
};

export default {
    render,
    events
}