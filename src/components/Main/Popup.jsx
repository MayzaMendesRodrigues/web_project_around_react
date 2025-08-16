export default function Popup(props) {
  const { title, children } = props;
  return (
    <section className="popup">
      <form className="popup__form">
        <h3 className="popup__title">{title}</h3>
        {children}
        <img src="./images/plus.svg" alt="Fechar" className="popup__closed" />
      </form>
    </section>
  );
}
