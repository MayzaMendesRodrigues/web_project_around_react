export default function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <div className="popup">
      <button type="button" onClose={onClose}>
              <img src="./images/plus.svg" alt="Fechar" className="popup__closed"/>

      </button>

       {title && <h3 className="popup__title">{title}</h3> } 
        {children}
      </div>
  );
}
