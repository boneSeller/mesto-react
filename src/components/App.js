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
    const [selectedCard, setSelectedCard] = React.useState({})


    function handleCardClick(card) {
      setSelectedCard(card)
    }

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
        setSelectedCard({});
      }


  return (

    

<div className="page">
    <div className="container">
        <Header />
        <Main  
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm 
        name="avatar" 
        title="Обновить аватар"
        submitName="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
          <input
            id="useravatar"
            name="avatar"
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input"
            required />
        <span className="popup__error  useravatar-error"></span>
        </PopupWithForm>
        <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
            <input
            required
            id="username"
            name="name"
            type="text"
            minLength="2"
            maxLength="40"
            className="popup__input"
            placeholder="Имя" />
            <span className="popup__error  username-error" />
            <input
            required
            id="userjob"
            name="about"
            type="text"
            minLength="2"
            maxLength="200"
            className="popup__input"
            placeholder="Профессиональная деятельность" />
            <span className="popup__error  userjob-error" />
        </PopupWithForm>
        
        <PopupWithForm 
      name="cards" 
      title="Новое место"
      submitName="Создать"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}>
        <input
          id="usertittle"
          name="name"
          type="text"
          minLength="2"
          maxLength="30"
          placeholder="Название"
          className="popup__input"
          required />
        <span className="popup__error  usertittle-error" />
        <input
          id="userlink"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input"
          required />
        <span className="popup__error  userlink-error" />
      </PopupWithForm>



      <PopupWithForm 
      name="delete"
      title="Вы уверены?"
      submitName="Да"
      onClose={closeAllPopups}
      />

      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
</div>
  );
}

export default App;
