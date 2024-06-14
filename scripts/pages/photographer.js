import {
  getPhotographerMediasById,
  getPhotographerById,
} from "../utils/api.js";
import Headline from "../components/header.js";
import GalerySortFilter from "../components/filter.js";
import Galery from "../components/galery.js";
import Lightbox  from "../components/lightbox.js";
import { DisplayLightbox }  from "../utils/lightbox.js";
import Form  from "../components/contactForm.js";
import { DisplayForm }  from "../utils/contactForm.js";
import { DisplayTotalLikes }  from "../utils/likes.js";
import { OpenCloseFilterMenu, displayMediaWithFilter } from "../utils/filter.js";

export const displayData = (photographer, medias) => {

  const main = document.querySelector("#main");

  main.innerHTML = `
    ${Headline.render(photographer)}
    <main class="main">
        ${GalerySortFilter.render(photographer)}
        <div class="main__galery">
          ${Galery.render(photographer, medias)}
          ${Lightbox.render(medias)}
          ${Form.render(photographer)}
        </div>
    </main>
  `;

  Headline.events(photographer, medias);
  GalerySortFilter.events(photographer, medias);
  Galery.events(photographer, medias);
  Lightbox.events(photographer, medias);
  OpenCloseFilterMenu();
  displayMediaWithFilter();
  DisplayLightbox();
  DisplayForm();
  DisplayTotalLikes();
};

(async () => {
  const photographerId = parseInt(new URLSearchParams(window.location.search)?.get("id"));

  const photographer = await getPhotographerById(photographerId);
  const medias = await getPhotographerMediasById(photographerId);

  displayData(photographer, medias);
})();
