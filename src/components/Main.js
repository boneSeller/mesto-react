import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([data, cards]) => {
        setCards(cards);
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
      <main className="main">
        <section className="profile">
          <div className="profile__info">
            <div className="profile__container">
              <img className="profile__avatar" alt="аватар" src={userAvatar} />
              <button
                className="profile__change"
                onClick={props.onEditAvatar}
              ></button>
            </div>
            <div className="profile__description">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit"
                type="button"
                onClick={props.onEditProfile}
              ></button>
              <p className="profile__job">{userDescription}</p>
            </div>
          </div>
          <button
            className="profile__button"
            type="button"
            onClick={props.onAddPlace}
          ></button>
        </section>
        <section className="elements">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          ))}
        </section>
      </main>
  );
}

export default Main;
