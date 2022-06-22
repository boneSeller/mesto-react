import React from 'react';
import image from '../images/image.svg';




function handleEditAvatarClick() {
    const popupProfile = document.querySelector('#popup-avatar');
    popupProfile.classList.add('popup_opened')
    console.log(popupProfile);
}



const handleEditProfileClick = () => {
    const popupProfile = document.querySelector('#popup-profile');

        popupProfile.classList.add('popup_opened')
}



function handleAddPlaceClick() {
    const popupProfile = document.querySelector('#popup-cards');

    popupProfile.classList.add('popup_opened')
}


function Main() {
    return(
        <>
        <main className="main">
        <section className="profile">
            <div className="profile__info">
                <div className="profile__container">
                    <img className="profile__avatar" alt='аватар' src={image}/>
                    <button className="profile__change" onClick={handleEditAvatarClick}></button>
                </div>
                <div className="profile__description">
                    <h1 className="profile__name">Жак-Ив Кусо</h1>
                    <button className="profile__edit" type="button" onClick={handleEditProfileClick}></button>
                    <p className="profile__job">Исследователь океана</p>
                </div>
            </div>
            <button className="profile__button" type="button" onClick={handleAddPlaceClick}></button>
        </section>
        <section className="elements">
        </section>
        <section id="popup-profile" className="popup popup_profile">
            <div className="popup__body popup__body_profile">
                <div className="popup__content popup__content_profile">
                    <button className="popup__close popup__close_profile" type="button"></button>
                    <h2 className="popup__title">Редактировать профиль</h2>
                    <form className="popup__form popup__form_profile" name="formProfile" noValidate>
                        <input id="username" className="popup__input" type="text" minLength="2" maxLength="40"
                            name="name" placeholder="Имя" required/>
                        <span className="popup__error username-error"></span>
                        <input id="userjob" className="popup__input" type="text" minLength="2" maxLength="200"
                            name="about" placeholder="Занятие" required/>
                        <span className="popup__error userjob-error"></span>
                        <button id="profileButton" className="popup__button" type="submit">Сохранить</button>
                    </form>
                </div>
            </div>
        </section>
        <section id="popup-cards" className="popup popup_cards">
            <div className="popup__body popup__body_cards">
                <div className="popup__content popup__content_cards">
                    <button className="popup__close popup__close_cards" type="button"></button>
                    <h2 className="popup__title popup__title_cards">Новое место</h2>
                    <form className="popup__form popup__form_cards" name="formCards" noValidate>
                        <input id="usertittle" className="popup__input" type="text" minLength="2" maxLength="40"
                            name="name" placeholder="Название" required/>
                        <span className="popup__error usertittle-error"></span>
                        <input id="userlink" className="popup__input" type="url" name="link"
                            placeholder="Ссылка на картинку" required/>
                        <span className="popup__error userlink-error"></span>
                        <button disabled={true} id="cardButton" className="popup__button popup__button_disabled"
                            type="submit">Создать</button>
                    </form>
                </div>
            </div>
        </section>
        <section id="popup-image" className="popup popup_image">
            <div className="popup__body">
                <div className="popup__container">
                    <button className="popup__close popup__close_image" type="button"></button>
                    <img className="popup__image"/>
                    <h2 className="popup__text"></h2>
                </div>
            </div>
        </section>
        <section id="popup-avatar" className="popup">
            <div className="popup__body popup__body_avatar">
                <div className="popup__content popup__content_avatar">
                    <button className="popup__close popup__close_avatar" type="button"></button>
                    <h2 className="popup__title popup__title_avatar">Обновить аватар</h2>
                    <form className="popup__form popup__form_avatar" name="formAvatar" noValidate>
                        <input id="useravatar" className="popup__input" type="url" minLength="2" 
                            name="avatar" placeholder="Ссылка на картинку" required/>
                        <span className="popup__error useravatar-error"></span>
                        <button id="avatarButton" className="popup__button" type="submit">Сохранить</button>
                    </form>
                </div>
            </div> 
        </section>
        <section className="popup" id="popup-delete">
            <div className="popup__body">
                <div className="popup__content popup__content_delete">
                    <button className="popup__close popup__close_delete" type="button"></button>
                    <h2 className="popup__title popup__title_delete">Вы уверены?</h2>
                    <form className="popup__form popup__form_delete" name="formDelete" noValidate>
                        <button id="deleteButton" className="popup__button popup__button_delete" type="submit">Да</button>
                    </form>
                </div>
            </div>
        </section>
    </main>
    </>  
    )
}

export default Main;