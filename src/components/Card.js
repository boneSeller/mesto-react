import React from "react";



function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
      }

    return(
        <div className="card">
            <img className="card__image"   
               alt = {props.card.name} 
               src = {props.card.link}
               onClick={handleClick}/>
            <button className="card__trash" type="button"></button>
            <div className="card__description">
                <h2 className="card__text">{props.card.name}</h2>
                <div className="card__container">
                    <button className="card__like" type="button"></button>
                    <div className="card__like__counter">{props.card.likes.length}</div>
                </div>
            </div>
        </div>
    )
}


export default Card;