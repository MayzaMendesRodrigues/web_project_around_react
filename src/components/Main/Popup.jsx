import closed from "../../images/plus.svg";
export default function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <div className="popup">
      <div className="popup__form">
        <button type="button" className="popup__closed" onClick={onClose}>
          <img src={closed} alt="Fechar" />
        </button>
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
