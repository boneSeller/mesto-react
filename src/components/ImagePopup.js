import React from "react";

function ImagePopup() {
    return(
        <section id="popup-image" className="popup popup_image">
            <div className="popup__body">
                <div className="popup__container">
                    <button className="popup__close popup__close_image" type="button"></button>
                    <img className="popup__image"/>
                    <h2 className="popup__text"></h2>
                </div>
            </div>
        </section>
    )
}

export default ImagePopup;