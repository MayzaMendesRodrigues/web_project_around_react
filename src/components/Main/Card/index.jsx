
export default function Card(props) {
    const {name, link, isLiked} = props.card
  return (
      <li class="card">
        <button class="cards__trash" aria-label="Excluir post"></button>
        <img src={link} alt="" class="cards__img" />
        <div class="cards__content">
          <h2 class="cards__title">{name}</h2>
          <button class="cards__like" aria-label="Curtir post"></button>
        </div>
      </li>
  )
}
