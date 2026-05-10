import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { getTemperatureCategory } from "../../utils/weatherApi";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";

function Main({ clothingItems, tempToShow, weatherMain, onCardClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const clothingCategory = getTemperatureCategory(
    `${tempToShow}°${currentTemperatureUnit}`,
  );
  const filteredItems = clothingItems.filter(
    (item) => item.weather.toLowerCase() === clothingCategory,
  );

  return (
    <main className="main">
      <WeatherCard
        temperature={tempToShow[currentTemperatureUnit]}
        weatherMain={weatherMain}
      />

      <p className="header-temp">
        Today is {tempToShow[currentTemperatureUnit]}°{currentTemperatureUnit} /
        You may want to wear:
      </p>
      <ul className="clothing-section">
        {filteredItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </ul>
    </main>
  );
}

export default Main;
