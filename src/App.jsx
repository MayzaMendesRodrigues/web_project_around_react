import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { api } from "./utils/api";
import { useEffect, useState } from "react";
import "./index.css";
import CurrentUserContext from "./contexts/CurrentUserContext";

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  const handleAddPlaceSubmit = async (data) => {
    try {
      const newCard = await api.addCard(data);
      setCards([newCard, ...cards]);
      handleClosePopup();
    } catch (error) {
      console.error("Erro ao adicionar cartao", error);
    }
  };

  async function handleCardDelete(card) {
    await api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id)
        );
      })
      .catch((error) => console.error("Erro ao eliminar card", error));
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
        setCards(response)
        
      } catch (error) {
        console.error("Erro ao buscar card", error);
      }
    }
    loadingCard();
  }, []);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  useEffect(() => {
    async function loadingUser() {
      try {
        const response = await api.getUserInfo();
        setCurrentUser(response);
      } catch (error) {
        console.error("usuario nao encontrado", error);
      }
    }
    loadingUser();
  }, []);

  const handleUpdateUser = async (data) => {
    try {
      await api.setUserInfo(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    } catch (error) {
      console.error("Erro ao atualizar foto", error);
    }
  };

  const handleUpdateAvatar = async (data) => {
    try {
      await api.setNewPhoto(data).then((newPhoto) => {
        setCurrentUser(newPhoto);
        handleClosePopup();
      });
    } catch (error) {
      console.error("Erro ao atualizar avatar", error);
    }
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar,
        handleAddPlaceSubmit,
      }}
    >
      <div className="page">
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
          cards={cards}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}
