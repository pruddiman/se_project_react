import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { getTemperatureCategory } from "../../utils/weatherApi";

function Main({ clothingItems, temperature, weatherMain, onCardClick }) {
  const clothingCategory = getTemperatureCategory(temperature);
  const filteredItems = clothingItems.filter(
    (item) => item.weather.toLowerCase() === clothingCategory,
  );

  return (
    <main className="main">
      <WeatherCard temperature={temperature} weatherMain={weatherMain} />

      <p className="header-temp">
        Today is {temperature}°F / You may want to wear:
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
