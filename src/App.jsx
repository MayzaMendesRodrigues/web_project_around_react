import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { api } from "./utils/api";
import { useEffect, useState } from "react";
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
    console.log(data, "DATA");
    await api.setUserInfo(data).then((newData) => {
      setCurrentUser(newData);
      handleClosePopup();
      
    });
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
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
