import React from "react";


function PopupWithForm(props) {
    function log() {
        console.log(props.isOpen);
    }

    log()

    return(
        <section id={`popup_${props.name}`} className={`popup ${props.isOpen ? `popup_opened` : ''}`}>
            <div className={`popup__body popup__body_${props.name}`}>
                <div className={`popup__content popup__content_${props.name}`}>
                    <button className={`popup__close popup__close_${props.name}`} onClick={props.onClose} type="button"></button>
                    <h2 className="popup__title">{props.title}</h2>
                    <form className={`popup__form popup__form_${props.name}`} name={props.name} noValidate>
                        {props.children}
                        <button id="profileButton" className="popup__button" type="submit">Сохранить</button>
                    </form>
                </div>
            </div>
        </section> 
    )
}

export default PopupWithForm;