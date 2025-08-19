export default function EditProfile() {
  return (
    <form
      name="card-form"
      id="new-card-form"
      className="popup__form"
      noValidate
    >
      <h3 className="popup__title">Editar perfil</h3>

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="profile-name"
          maxLength="30"
          minLength="1"
          name="profile-name"
          placeholder="Nome"
          required
          type="text"
        />
        <span className="popup__error" id="card-name-error"></span>
      </label>

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="profile-about"
          maxLength="30"
          minLength="1"
          name="profile-about"
          placeholder="Sobre mim"
          required
          type="text"
        />
        <span className="popup__error" id="card-name-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
