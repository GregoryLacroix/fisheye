import { getPhotographerMediasById, getPhotographerById } from "../utils/api.js";
import { render } from "../components/galery.js";

export const OpenCloseFilterMenu = () =>  {

    const filterMenu = document.querySelector(".dropdown-content");
    const filterMenuButton = document.querySelector(".dropbtn");
   
   
    filterMenuButton.addEventListener('click' , (event) => {
        document.querySelector(".filter_icone_down").classList.toggle("rotate");

        if (filterMenu.classList.contains('show')) {
            filterMenu.classList.remove('show');
            filterMenuButton.classList.remove('border_dropbtn');
        }else{
            filterMenu.classList.add('show');
            filterMenuButton.classList.add('border_dropbtn');
        }
    });
}

export const displayMediaWithFilter = async() => {

    const filterCategory = document.querySelector(".filter_category");
    const filterDropDownLink = document.querySelectorAll(".dropdown_link");
    const photographerId = parseInt(new URLSearchParams(window.location.search)?.get("id"));
    const  medias  = await getPhotographerMediasById(photographerId);
    const  photographer  = await getPhotographerById(photographerId);

    filterDropDownLink.forEach(filter => {
        filter.addEventListener('click' , (event) => {

            let currentCategory = filter.textContent;
            filter.innerHTML = filterCategory.innerHTML;
            filterCategory.innerHTML = currentCategory;
            sortByFilter(filterCategory.textContent);
        });

        const sortByFilter = filterValue => {
            switch (filterValue) {
                case 'Titre':
                    medias.sort((a, b) => a.title.localeCompare(b.title));
                break;
                case 'Popularité':
                    medias.sort((a, b) => b.likes - a.likes);
                break;
                case 'Date':
                    medias.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            }

            // render(photographer, medias);
        }
    });
}