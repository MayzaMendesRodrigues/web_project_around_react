import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
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
