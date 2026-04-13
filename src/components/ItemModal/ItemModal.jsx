import { useEffect } from "react";
import "./ItemModal.css";
import closeIcon from "../../assets/icons/Modal_Close_Icon_X.svg";

function ItemModal({ isOpen, onClose, card }) {
  useEffect(() => {
    if (!isOpen) return; // guard inside the effect

    function handleEsc(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen || !card) return null;

  return (
    <div className="item-modal" onClick={onClose}>
      <div className="item-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="item-modal__close" type="button" onClick={onClose}>
          <img
            src={closeIcon}
            alt="Close Icon"
            className="item-modal__close-icon"
          />
        </button>

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
