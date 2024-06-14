export const DisplayForm = () =>  {

    const modalBody = document.querySelector('.modal-body');
    const modalbg = document.querySelector(".bground_form");
    const modalbuttonClose = document.querySelector(".btn_form_close");
    const buttonContact = document.querySelector('.contact_button');

    buttonContact.addEventListener('click' , (event) => {
        modalbg.classList.remove('modalclose');
        modalbg.style.display = "block";
    });

    modalbuttonClose.addEventListener('click' , (event) => {
        modalbg.classList.add('modalclose');
    });
}
