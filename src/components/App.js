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
import DeletePopup from "./DeletePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isDeletePopupOpen, setIsdeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [selectedCardToDelete, setSelectedCardToDelete] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [showLoading, setShowLoading] = React.useState();
  
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


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleDeletePopupClick(card) {
    setIsdeletePopupOpen(true);
    setSelectedCardToDelete(card);
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

  function handleUpdateUser(userData) {
    setShowLoading(true);
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
    setShowLoading(true);
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

  function handleCardLike(card) {
    // ?????????? ??????????????????, ???????? ???? ?????? ???????? ???? ???????? ????????????????
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // ???????????????????? ???????????? ?? API ?? ???????????????? ?????????????????????? ???????????? ????????????????
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {
      console.log(err);
    });
}

  function handleCardDelete(card) {
    setShowLoading(true);
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => item !== card))
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setShowLoading(false);
    })
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsdeletePopupOpen(false);
    setSelectedCard({});
    setSelectedCardToDelete({});
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
          onTrashButton={handleDeletePopupClick}
          cards={cards}
        />
        <Footer />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} showLoading={showLoading} onUpdateAvatar={handleUpdateAvatar}/>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}  onUpdateUser={handleUpdateUser} showLoading={showLoading}/>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} showLoading={showLoading}/>
        <DeletePopup isOpen={isDeletePopupOpen} onClose={closeAllPopups} showLoading={showLoading} onCardDelete={handleCardDelete} card={selectedCardToDelete} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
