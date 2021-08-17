import React from 'react';
import { api } from '../utils/Api';
import Card from './Card.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, cardsData]) => {
                setUserAvatar(userData.avatar);
                setUserName(userData.name);
                setUserDescription(userData.about);
                setCards(cardsData);
            })
            .catch(err => console.log(err));
    },  []);

    return(
        <main>
            <section className="profile">
                <div className="profile__avatar-wrapper">
                    <img src={userAvatar} alt="Аватар пользователя" className="profile__avatar"/>
                    <button type="button" className="profile__button-edit-avatar" aria-label="Редактировать аватар" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" onClick={onEditProfile}></button>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card) => <Card card={card} key={card._id} onCardClick={onCardClick} />)}
                </ul>
            </section>
        </main>
    );
}

export default Main;