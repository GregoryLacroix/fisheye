import { getPhotographers } from "../utils/api.js";
import PhotographerThumbnail from "../components/PhotographerThumbnail.js";

const displayData = (photographers) => {

  const main = document.querySelector("#main");

  main.innerHTML = `
  <header class="header__page__home">
    <a href="index.html"><img src="assets/images/logo.webp" class="logo" alt="fisheye logo"/></a>
    <h1 class="header__title">Nos photographes</h1>
  </header>
  
  <div class="main__container">${photographers
    .map(PhotographerThumbnail.render)
    .join("")}</div>
    `;
};

(async () => {
  const photographers = await getPhotographers();
  displayData(photographers);
})();
