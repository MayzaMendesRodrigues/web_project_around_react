export default function Card(props) {
  const { name, link } = props.card;
  return (
    <li className="card">
      {/* <button classNme="cards__trash" aria-label="Excluir post"></button> */}
      <img src={link} alt="" className="cards__img" />
      <div className="cards__content">
        <h2 className="cards__title">{name}</h2>
        <button className="cards__like" aria-label="Curtir post">
        </button>
      </div>
    </li>
  );
}
