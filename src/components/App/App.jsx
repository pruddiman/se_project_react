import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
// import api from "../../utils/api.js";
import { defaultClothingItems } from "../../utils/clothingItems.js";
import { getWeather } from "../../utils/weatherApi.js";

import { useState, useEffect } from "react";

function App() {
  // 1. State hooks
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [temperature, setTemperature] = useState(0);
  const [activeModal, setActiveModal] = useState("");
  const [weatherMain, setWeatherMain] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  // 2. Effects (always at top level)
  // useEffect(() => {
  //   api
  //     .getItems()
  //     .then((items) => setClothingItems(items))
  //     .catch((err) => console.error(err));
  // }, []);

  const city = weatherData?.name;

  useEffect(() => {
    getWeather()
      .then((data) => {
        const temp = Math.round(data.main.temp);
        setTemperature(temp);

        const mainCondition = data.weather[0].main;
        setWeatherMain(mainCondition);

        setWeatherData(data);
      })
      .catch((err) => console.error("Weather fetch error:", err));
  }, []);

  // 3. Event handlers

  function handleOpenAddItemModal() {
    setActiveModal("add-garment");
  }

  function handleCloseModal() {
    setActiveModal("");
    setSelectedCard(null);
  }

  function handleAddItem(newItem) {
    setClothingItems([newItem, ...clothingItems]);
    handleCloseModal();
  }

  //function handleAddItem(newItem) {
  // api
  //.addItem(newItem)
  //  .then((createdItem) => {
  //  setClothingItems([createdItem, ...clothingItems]);
  //   handleCloseModal();
  //  })
  //   .catch((err) => console.error(err));
  //}

  function handleCardClick(card) {
    setSelectedCard(card);
    setActiveModal("preview");
  }

  // 4. JSX
  return (
    <div className="app">
      <div className="app__content">
        <Header onAddClothes={handleOpenAddItemModal} city={city} />

        <Main
          clothingItems={clothingItems}
          temperature={temperature}
          weatherMain={weatherMain}
          onCardClick={handleCardClick}
        />

        <Footer />
      </div>

      <AddItemModal
        isOpen={activeModal === "add-garment"}
        onClose={handleCloseModal}
        onAddItem={handleAddItem}
      />

      <ItemModal
        isOpen={activeModal === "preview"}
        onClose={handleCloseModal}
        card={selectedCard}
      />
    </div>
  );
}

export default App;
