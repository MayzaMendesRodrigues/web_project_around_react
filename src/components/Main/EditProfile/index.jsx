import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

export default function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionName = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   await handleUpdateUser({ name, about: description });

    console.log(name, description)
  };

  
  return (
    <form
      name="card-form"
      id="new-card-form"
      className="popup__form"
      onSubmit={handleSubmit}
     
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
          value={name}
          required
          type="text"
          onChange={handleNameChange}
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
          value={description}
          required
          type="text"
          onChange={handleDescriptionName}
        />
        <span className="popup__error" id="card-name-error"></span>
      </label>

      <button className="button popup__button" type="submit" >
        Salvar
      </button>
    </form>
  );
}
