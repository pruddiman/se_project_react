import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  return (
    <li className="card">
      <div className="card__image-wrapper">
        <p className="card__name">{item.name}</p>
        <img
          src={item.link || item.imageUrl}
          alt={item.name}
          className="card__image"
          onClick={() => onCardClick(item)}
        />
      </div>
    </li>
  );
}

export default ItemCard;
