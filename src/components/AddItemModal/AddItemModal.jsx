import React, { useState } from "react";
import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./AddItemModal.css";

function AddItemModal({ isOpen, onClose, onAddItem }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    function handleEsc(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      name,
      imageUrl,
      weather,
      _id: Date.now().toString(),
    }; // temporary ID

    onAddItem(newItem);
    onClose();
  }

  return (
    <ModalWithForm
      title="New Garment"
      name="add-garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          className="modal__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label className="modal__label">
        Image URL
        <input
          type="url"
          name="imageUrl"
          className="modal__input"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>

      <fieldset className="modal__fieldset">
        <legend className="modal__legend">Weather type</legend>

        <label className="modal__radio-label">
          <input
            type="radio"
            name="weather"
            value="hot"
            checked={weather === "hot"}
            onChange={(e) => setWeather(e.target.value)}
          />
          Hot
        </label>

        <label className="modal__radio-label">
          <input
            type="radio"
            name="weather"
            value="warm"
            checked={weather === "warm"}
            onChange={(e) => setWeather(e.target.value)}
          />
          Warm
        </label>

        <label className="modal__radio-label">
          <input
            type="radio"
            name="weather"
            value="cold"
            checked={weather === "cold"}
            onChange={(e) => setWeather(e.target.value)}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
