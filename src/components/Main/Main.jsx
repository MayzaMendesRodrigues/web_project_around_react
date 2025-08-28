import { useContext, useEffect, useState } from "react";
import editProfile from "/images/edit__button.svg";
import addCard from "/images/plus.svg";
import Popup from "./Popup";
import NewCard from "./NewCard";
import EditProfile from "./EditProfile";
import EditAvatar from "./EditAvatar";
import Card from "./Card";
import ImagePopup from "./ImagePopup";
import { api } from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main() {
  const currentUser = useContext(CurrentUserContext);
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  async function handleCardDelete(card) {
    await api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((currentCard) => currentCard._id !== card._id))
    }).catch((error) => console.error("Erro ao eliminar card", error))
  }
  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    async function loadingCard() {
      try {
        const response = await api.getInicialCards();
        console.log(response);

        setCards(response);
      } catch (error) {
        console.error("Erro ao buscar card", error);
      }
    }
    loadingCard();
  }, []);

  const newCardPopup = {
    children: <NewCard />,
  };
  const newAvatarPopup = {
    children: <EditAvatar />,
  };
  const newProfilePopup = {
    children: <EditProfile />,
  };

  const imagePopup = (card) => ({
    title: "",
    children: <ImagePopup card={card} onClose={handleClosePopup} />,
  });
  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <button type="button" onClick={() => handleOpenPopup(newAvatarPopup)}>
            <img
              src={currentUser.avatar}
              alt="Perfil do usuario"
              className="profile__avatar"
            />

            <div className="profile__overlay"></div>
          </button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            className="profile__edit"
            id="profile__edit-btn"
            type="button"
            onClick={() => handleOpenPopup(newProfilePopup)}
          >
            <img src={editProfile} alt="Botao que edita o perfil do usuario" />
          </button>
          <p className="profile__aboutMe">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          id="profile__add_card-btn"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img
            src={addCard}
            alt="atualizacao de perfil"
            className="profile__add"
          />
        </button>
      </section>
      <section className="cards">
        <ul className="cards__element-items" id="cards__content">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                handleOpenPopup={(img) => handleOpenPopup(imagePopup(img))}
                isLiked={card.isLiked}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            );
          })}
        </ul>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
