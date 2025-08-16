import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./pages/index.css";

export default function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}
