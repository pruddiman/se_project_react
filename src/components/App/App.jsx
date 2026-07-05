import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import api from "../../utils/api.js";
import { getWeather, getTemperatureCategory } from "../../utils/weatherApi.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile.jsx";
import { useState, useEffect } from "react";
import Login from "../Login.jsx";

function App() {
  // state
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("jwt")),
  );
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [weatherMain, setWeatherMain] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [temperature, setTemperature] = useState({ F: null, C: null });

  // fetch items when logged in
  useEffect(() => {
    if (!loggedIn) {
      setClothingItems([]);
      return;
    }

    api
      .getItems()
      .then((data) => setClothingItems(data))
      .catch((err) => console.error("Clothing fetch error:", err));
  }, [loggedIn]);

  // fetch weather
  useEffect(() => {
    getWeather()
      .then((data) => {
        const tempF = Math.round(data.main.temp);
        const tempC = Math.round(((tempF - 32) * 5) / 9);
        setTemperature({ F: tempF, C: tempC });

        const category = getTemperatureCategory(tempF);
        setWeatherMain(category);
        setWeatherCondition(data.weather[0].main);
        setWeatherData(data);
      })
      .catch((err) => console.error("Weather fetch error:", err));
  }, []);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prevUnit) => (prevUnit === "F" ? "C" : "F"));
  };

  const city = weatherData?.name;

  // handlers
  function handleOpenAddItemModal() {
    setActiveModal("add-garment");
  }

  function handleCloseModal() {
    setActiveModal("");
    setSelectedCard(null);
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setClothingItems((items) =>
          items.filter((item) => item._id !== card._id),
        );
        handleCloseModal();
      })
      .catch((err) => console.error(err));
  }

  const handleAddItem = (newItem, resetForm) => {
    api
      .addItem(newItem)
      .then((createdItem) => {
        setClothingItems([createdItem, ...clothingItems]);
        resetForm();
        handleCloseModal();
      })
      .catch((err) => console.error(err));
  };

  function handleCardClick(card) {
    setSelectedCard(card);
    setActiveModal("preview");
  }

  // JSX
  return (
    <div className="app">
      <div className="app__content">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <BrowserRouter>
            {!loggedIn ? (
              <Login onLogin={() => setLoggedIn(true)} />
            ) : (
              <>
                <Header onAddClothes={handleOpenAddItemModal} city={city} />

                <Routes>
                  <Route
                    path="/"
                    element={
                      <Main
                        clothingItems={clothingItems}
                        temperature={temperature}
                        weatherMain={weatherMain}
                        weatherCondition={weatherCondition}
                        onCardClick={handleCardClick}
                      />
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <Profile
                        clothingItems={clothingItems}
                        onCardClick={handleCardClick}
                        onAddItem={handleOpenAddItemModal}
                      />
                    }
                  />
                </Routes>

                <AddItemModal
                  isOpen={activeModal === "add-garment"}
                  onClose={handleCloseModal}
                  onAddItem={handleAddItem}
                />

                <ItemModal
                  isOpen={activeModal === "preview"}
                  onClose={handleCloseModal}
                  card={selectedCard}
                  onDelete={handleCardDelete}
                />

                <Footer />
              </>
            )}
          </BrowserRouter>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </div>
  );
}

export default App;
