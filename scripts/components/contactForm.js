export const events = () => {};
export const render = ( photographer ) => {

    return `<div class="bground_form">
                <div class="content_form">
                    <div class="header_modal_form">
                        <h2 class="form_title">Contactez-moi<br>${photographer.name}</h2>
                        <i class="fa-solid fa-xmark btn_form_close"></i>
                    </div>
                    <form method="post" action="">
                        <label for="firstName">Prénom</label>
                        <input type="text" name="firstName" id="firstName">
                        <label for="lastName">Nom</label>
                        <input type="text" name="lastName" id="lastName">
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email">
                        <label for="message">Votre Message</label>
                        <textarea name="message" id="message"></textarea>
                        <button type="submit" class="btn_submit_form">Envoyer</button>
                    </form>
                </div>
            </div>`;
}

export default {
    render,
    events
}