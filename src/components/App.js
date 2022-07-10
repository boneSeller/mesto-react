import React, { useEffect } from "react";
import { ReactDOM } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [showLoading, setShowLoading] = React.useState()
  
  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    Promise.all([api.getInitialCards()])
      .then(([cards]) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
}

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state => state.filter((item) => item !== card)))      
    })
  }

  function handleUpdateAvatar(data) {
    api.updateUserAvatar(data).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setShowLoading(false);
    })
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleUpdateUser(userData) {
    api.setUserInfo(userData)
    .then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setShowLoading(false);
    })
  }

  function handleAddPlaceSubmit(data) {
    api.addUserCard(data).then((res) => {
      setCards([res,...cards]);
      closeAllPopups();
    })
      .catch((err) => {
        console.log(err)
    })
    .finally(() => {
      setShowLoading(false);
    })
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <div className="container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} showLoading={showLoading} onUpdateAvatar={handleUpdateAvatar}/>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}  onUpdateUser={handleUpdateUser} showLoading={showLoading}/>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} showLoading={showLoading}/>
        <PopupWithForm
          name="delete"
          title="Вы уверены?"
          buttonText="Да"
          onClose={closeAllPopups}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
