import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import "./vendor/fonts.css";

function Main({
  clothingItems,
  temperature,
  weatherMain,
  weatherCondition,
  onCardClick,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const clothingCategory = weatherMain;
  const filteredItems = clothingItems.filter(
    (item) => item.weather.toLowerCase() === clothingCategory,
  );

  return (
    <main className="main">
      <WeatherCard
        temperature={temperature[currentTemperatureUnit]}
        weatherCondition={weatherCondition}
      />

      <p className="header-temp">
        Today is {temperature[currentTemperatureUnit]}°{currentTemperatureUnit}{" "}
        / You may want to wear:
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
