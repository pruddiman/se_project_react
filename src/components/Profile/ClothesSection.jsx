import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, onCardClick, onAddItem }) {
  console.log(clothingItems);
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <h2 className="clothes-section__title">Your Items</h2>
        <button className="clothes-section__add-button" onClick={onAddItem}>
          + Add New
        </button>
      </div>

      <div className="clothes-section__items">
        <div className="clothes-section__grid-wrapper">
          <div className="clothes-section__grid">
            {clothingItems.map((item) => (
              <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClothesSection;
