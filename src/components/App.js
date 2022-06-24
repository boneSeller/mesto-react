import React, { useEffect } from 'react';
import { ReactDOM } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';





function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }



function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
}



function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
}

function closeAllPopups() {
    setIsEditAvatarPopupOpen(false); 
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);

   }


  return (

    

<div className="page">
    <div className="container">
        <Header />
        <Main  
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick} />
        <Footer />
        <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
            <input
            required
            id="name"
            name="name"
            type="text"
            minLength="2"
            maxLength="40"
            className="popup__input"
            placeholder="Имя" />
            <span className="popup__error popup__error_visible name-error" />
            <input
            required
            id="job"
            name="about"
            type="text"
            minLength="2"
            maxLength="200"
            className="popup__input"
            placeholder="Профессиональная деятельность" />
            <span className="popup__error popup__error_visible job-error" />
        </PopupWithForm>
        
        <PopupWithForm 
      name="cards" 
      title="Новое место"
      submitName="Создать"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}>
        <input
          id="nameOfPicture"
          name="name"
          type="text"
          minLength="2"
          maxLength="30"
          placeholder="Название"
          className="popup__input"
          required />
        <span className="popup__error popup__error_visible nameOfPicture-error" />
        <input
          id="linkOfPicture"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input"
          required />
        <span className="popup__error popup__error_visible userlink-error" />
      </PopupWithForm>

      <PopupWithForm 
      name="avatar" 
      title="Обновить аватар"
      submitName="Сохранить"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}>
        <input
          id="avatar-link"
          name="avatar"
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input popup__avatar-link"
          required />
        <span className="popup__error popup__error_visible avatar-link-error"></span>
      </PopupWithForm>

      <PopupWithForm 
      name="delete"
      title="Вы уверены?"
      submitName="Да"
      onClose={closeAllPopups}
      />

        <template id="card__template">
            <div className="card">
                <img className="card__image"/>
                <button className="card__trash" type="button"></button>
                <div className="card__description">
                    <h2 className="card__text"></h2>
                    <div className="card__container">
                        <button className="card__like" type="button"></button>
                        <div className="card__like__counter">0</div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</div>
  );
}

export default App;
