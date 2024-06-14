export const events = () => {};
export const render = () => {

    return `
        <div class="main__filter">
            <h2 for="filter" class="label__filter">Trier par</h2>
            <div class="dropdown">
            <button class="dropbtn"><span class="filter_category">Popularité</span>
                <i class="fa-solid fa-chevron-down filter_icone_down"></i>
                <i class="fa-solid fa-chevron-up filter_icone_up"></i>
            </button>
                <div id="myDropdown" class="dropdown-content">
                    <hr class="dropdown_separation">
                    <a href="#date" class="dropdown_link">Date</a>
                    <hr class="dropdown_separation">
                    <a href="#titre" class="dropdown_link">Titre</a>
                </div>
            </div>
        </div>
        `;
};

export default {
    render,
    events
}