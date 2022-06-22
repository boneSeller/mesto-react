import React from 'react';
import image from '../images/image.svg';







function Main(props) {
    return(
        <>
        <main className="main">
        <section className="profile">
            <div className="profile__info">
                <div className="profile__container">
                    <img className="profile__avatar" alt='аватар' src={image}/>
                    <button className="profile__change" onClick={props.onEditAvatar}></button>
                </div>
                <div className="profile__description">
                    <h1 className="profile__name">Жак-Ив Кусо</h1>
                    <button className="profile__edit" type="button" onClick={props.onEditProfile}></button>
                    <p className="profile__job">Исследователь океана</p>
                </div>
            </div>
            <button className="profile__button" type="button" onClick={props.onAddPlace}></button>
        </section>
        <section className="elements">
        </section>

 
 

    </main>
    </>  
    )
}

export default Main;