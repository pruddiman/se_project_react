import { useEffect } from "react";
import "./ItemModal.css";

function ItemModal({ isOpen, onClose, card }) {
  if (!isOpen || !card) return null;

  // Escape key closes modal
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="item-modal" onClick={onClose}>
      <div className="item-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="item-modal__close" onClick={onClose}></button>

        <img
          src={card.imageUrl || card.link}
          alt={card.name}
          className="item-modal__image"
        />

        <div className="item-modal__info">
          <h2 className="item-modal__name">{card.name}</h2>
          <p className="item-modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
