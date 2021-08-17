function Card(props) {

    function handleCardClick() {
        props.onCardClick(props.card);
    }
  
    return (
        <li className="elements__item">
            <img className="elements__image" src={props.card.link} alt={props.card.name} onClick={handleCardClick} />
            <h2 className="elements__title">{props.card.name}</h2>
            <div className="elements__like-container">
                <button type="button" className="elements__like-button" aria-label="Поставить лайк"></button>
                <p className="elements__like-counter">{props.card.likes.length}</p>
            </div>
            <button type="button" className="elements__delete-button" aria-label="Удалить фотографию"></button>
        </li>
    );
  }
  
export default Card;