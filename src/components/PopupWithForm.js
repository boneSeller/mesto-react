import React from "react";


function PopupWithForm(props) {
    return(
        <section id={`popup_${props.name}`} className={`popup ${props.isOpen}`}>
            <div className={`popup__body popup__body_${props.name}`}>
                <div className={`popup__content popup__content_${props.name}`}>
                    <button className={`popup__close popup__close_${props.name}`} type="button"></button>
                    <h2 className="popup__title">{props.title}</h2>
                    <form className={`popup__form popup__form_${props.name}`} name={props.name} noValidate>
                        {props.children}
                        <button id="profileButton" className="popup__button" type="submit">{props.submitName}</button>
                    </form>
                </div>
            </div>
        </section> 
    )
}

export default PopupWithForm;