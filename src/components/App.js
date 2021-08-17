import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    };

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(false);
    }

    return (
    <>
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm name="profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
            <label className="popup__form-label">
                <input type="text" required className="popup__input" minLength="2" maxLength="40" placeholder="Имя" name="personName" id="person-name" defaultValue="" />
                <span className="popup__error person-name-error popup__error-visible"></span>
            </label>
            <label className="popup__form-label">
                <input type="text" required className="popup__input" minLength="2" maxLength="200" placeholder="Профессия" name="personJob" id="person-job" defaultValue="" />
                <span className="popup__error person-job-error popup__error-visible"></span>
            </label>
        </PopupWithForm>
        <PopupWithForm name="place" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
            <label className="popup__form-label">
                <input type="text" required className="popup__input" minLength="2" maxLength="30" placeholder="Название" name="name" id="name" defaultValue="" />
                <span className="popup__error name-error popup__error-visible"></span>
            </label>
            <label className="popup__form-label">
                <input type="url" required className="popup__input" placeholder="Ссылка на картинку" name="link" id="link" defaultValue="" />
                <span className="popup__error link-error popup__error-visible"></span>
            </label>
        </PopupWithForm>
        <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
            <label className="popup__form-label">
                <input type="url" required className="popup__input" placeholder="Ссылка на картинку" name="avatarLink" id="avatar-link" defaultValue="" />
                <span className="popup__error avatar-link-error popup__error-visible"></span>
            </label>
        </PopupWithForm>
        <PopupWithForm name="card-delete-confirm" title="Вы уверены?" buttonText="Да">
        </PopupWithForm>
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
    </>
    );
}

export default App;
