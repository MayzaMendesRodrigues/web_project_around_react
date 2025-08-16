import avatar from '../images/avatar.svg'
import editProfile from '../images/edit__button.svg'
import addCard from '../images/plus.svg'
export default function Main() {
  return (
    <main className="content">
        <section className="profile">
          <div className="profile__content">
            <img
              src={avatar}
              alt="Perfil do usuario"
              className="profile__avatar"
            />
            <div className="profile__overlay"></div>
          </div>

          <div className="profile__info">
            <h1 className="profile__name">Jacques Cousteau</h1>
            <button className="profile__edit" id="profile__edit-btn">
              <img
                src={editProfile}
                alt="Botao que edita o perfil do usuario"
              />
            </button>
            <p className="profile__aboutMe"></p>
          </div>
          <button className="profile__add-button" id="profile__add_card-btn">
            <img
              src={addCard}
              alt="atualizacao de perfil"
              className="profile__add"
            />
          </button>
        </section>

        {/* <section className="cards">
          <ul className="cards__element-items" id="cards__content"></ul>
        </section>

        <section className="popup" id="popup__image">
          <div className="popup__images">
            <img className="popup__images-img" src="#" alt="" />
            <p className="popup__images-title"></p>
            <img src="./images/plus.svg" alt="Fechar" className="popup__closed" />
          </div>
        </section>

        <section className="popup" id="popupWithConfirmation">
          <form className="popup__form">
            <h2 className="popup__title">Tem certeza?</h2>
            <button
              className="popup__save"
              type="submit"
              id="popupConfirmationButton"
            >
              sim
            </button>
            <img src="./images/plus.svg" alt="Fechar" className="popup__closed" />
          </form>
        </section>

        <section className="popup" id="popupEditPhoto">
          <form className="popup__form">
            <h2 className="popup__title">Alterar a foto do perfil</h2>
            <label className="popup__field">
              <input
                type="url"
                placeholder="url da imagem"
                id="popup__input-photo"
                minlength="2"
                maxlength="300"
                className="popup__input"
                required
              />
              <span
                className="popup__input-error popup__input-error_active"
                id="popup__input-photo-error"
              ></span>
            </label>

            <button
              className="popup__save"
              type="submit"
              id="popupEditeProfileButton"
            >
              salvar
            </button>
            <img src="./images/plus.svg" alt="Fechar" className="popup__closed" />
          </form>
        </section> */}
      </main>
  )
}
