import { useEffect, useState } from "react";
import avatar from "/images/avatar.svg";
import editProfile from "/images/edit__button.svg";
import addCard from "/images/plus.svg";
import Popup from "./Popup";
import NewCard from "./NewCard";
import EditProfile from "./EditProfile";
import EditAvatar from "./EditAvatar";
import Card from "./Card";
import ImagePopup from "./ImagePopup";
import { api } from "../../utils/api";


export default function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function loadingCard() {
      try {
        const response = await api.getInicialCards();
        setCards(response);
      } catch (error) {
        console.error("Erro ao buscar card", error);
      }
    }
    loadingCard()
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
              src={avatar}
              alt="Perfil do usuario"
              className="profile__avatar"
            />

            <div className="profile__overlay"></div>
          </button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">Jacques Cousteau</h1>
          <button
            className="profile__edit"
            id="profile__edit-btn"
            type="button"
            onClick={() => handleOpenPopup(newProfilePopup)}
          >
            <img src={editProfile} alt="Botao que edita o perfil do usuario" />
          </button>
          <p className="profile__aboutMe">Explorador</p>
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
