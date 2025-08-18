import { useState } from "react";
import avatar from "../../images/avatar.svg";
import editProfile from "../../images/edit__button.svg";
import addCard from "../../images/plus.svg";
import Popup from "./Popup";
import NewCard from "./NewCard";
import EditProfile from "./EditProfile";
import EditAvatar from "./EditAvatar";


const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = {
    title: "NewCard",
    children: <NewCard />,
  };
  const newAvatarPopup = {
    title: "Alterar a foto do perfil",
    children: <EditAvatar />,
  };
  const newProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
    console.log("renderizado");
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
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
