import { useContext} from "react";
import editProfile from "/images/edit__button.svg";
import addCard from "/images/plus.svg";
import Popup from "./Popup";
import NewCard from "./NewCard";
import EditProfile from "./EditProfile";
import EditAvatar from "./EditAvatar";
import Card from "./Card";
import ImagePopup from "./ImagePopup";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main({ onOpenPopup, onClosePopup, popup, cards, onCardLike, onCardDelete }) {
  const { currentUser } = useContext(CurrentUserContext);


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
    children: <ImagePopup card={card} onClose={onClosePopup} />,
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <button
            type="button"
            onClick={() => {
        
              onOpenPopup(newAvatarPopup);
            }}
          >
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
            onClick={() => onOpenPopup(newProfilePopup)}
          >
            <img src={editProfile} alt="Botao que edita o perfil do usuario" />
          </button>
          <p className="profile__aboutMe">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          id="profile__add_card-btn"
          type="button"
          onClick={() => onOpenPopup(newCardPopup)}
        >
          <img
            src={addCard}
            alt="atualizacao de perfil"
            className="profile__add"
          />
        </button>
      </section>
      <section className="cards">
        {cards.length === 0 ? (
          <p className="cards__empty-message">Nenhuma publicação</p>
        ) : (
          <ul className="cards__element-items" id="cards__content">
            {cards.map((card) => {
              return (
                <Card
                  key={card._id}
                  card={card}
                  handleOpenPopup={(img) => onOpenPopup(imagePopup(img))}
                  isLiked={card.isLiked}
                  onCardLike={onCardLike}
                  onCardDelete={onCardDelete}
                />
              );
            })}
          </ul>
        )}
      </section>

      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
