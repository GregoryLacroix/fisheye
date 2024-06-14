export const events = () => {};
export const render = ( data ) => {
    console.log(data);
    
    return `<div class="bground">
                <div class="content">
                    <div class="content_gallery">
                        <i class="fa-solid fa-chevron-left gallery_chevron_left btn_previous"></i>
                        <div class="block_lightbox_picture"> 
                            <img src="./assets/images/photographers/samplePhotos-Small/Mimi Keel/Animals_Rainbow.webp" class="ligthbox_picture">
                        </div>
                        <div class="gallery_action_right">
                        <i class="fa-solid fa-xmark cross_close"></i>
                        </div>
                        <i class="fa-solid fa-chevron-right gallery_chevron_right btn_next"></i>
                    </div>
                    <div class="content_footer">
                        <span class="footer_title">Arc-en-ciel</span>
                    </div>
                </div>
            </div>`;
}

export default {
    render,
    events
}