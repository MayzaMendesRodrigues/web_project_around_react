import { useContext, useRef } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
export default function EditAvatar() {
  const avatarRef = useRef();
  const {handleUpdateAvatar} = useContext(CurrentUserContext)

  function handleSubmit(event) {
    event.preventDefault();
console.log("Submit do avatar", avatarRef.current.value)
    handleUpdateAvatar({
      url: avatarRef.current.value,
    });


  }
  return (
    <form
      onSubmit={handleSubmit}
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
    >
      <h3 className="popup__title">Alterar a foto do perfil</h3>

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="avatar-link"
          name="link"
          ref={avatarRef}
          placeholder="Image link"
          required
          type="url"
        />
        <span className="popup__error" id="card-link-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
