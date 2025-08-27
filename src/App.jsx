import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { api } from "./utils/api";
import { useEffect, useState } from "react";
import "./pages/index.css";
import CurrentUserContext from "./contexts/CurrentUserContext";

export default function App() {
  const [currentUser, setCurrentUser] = useState({});

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
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}
