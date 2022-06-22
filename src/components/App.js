import React, { useEffect } from 'react';
import { ReactDOM } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';





function App(props) {
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
  return (

    

<div className="page">
    <div className="container">
        <Header />
        <Main  
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick} />
        <Footer />
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
