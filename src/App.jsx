import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { api } from "./utils/api";
import { useEffect,  useState } from "react";
import "./pages/index.css";
import CurrentUserContext from "./contexts/CurrentUserContext";

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);

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
      console.log(data, "DATA");
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
      console.log("DATA AVATAR:", data)
      await api.setNewPhoto(data).then((newPhoto) => {
        console.log("Resposta do APi AVATAR", newPhoto)
        setCurrentUser(newPhoto);
        handleClosePopup();
      });
    } catch (error) {
      console.error("Erro ao atualizar avatar", error);
    }
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page">
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
       
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}
