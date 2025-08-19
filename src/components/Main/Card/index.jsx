import trash from "../../../images/trash.svg";
export default function Card({ card, handleOpenPopup }) {
  const { name, link } = card;

  return (
    <li className="card">
      <button aria-label="Excluir post">
        <img src={trash} className="cards__trash" />
      </button>
      <img
        src={link}
        alt={name}
        className="cards__img"
        onClick={() => handleOpenPopup(card)}
      />
      <div className="cards__content">
        <h2 className="cards__title">{name}</h2>
        <button className="cards__like" aria-label="Curtir post"></button>
      </div>
    </li>
  );
}
