import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { getWeatherCondition } from "../../utils/weatherApi";

function Main({ clothingItems, temperature, onCardClick }) {
  const weatherType = getWeatherCondition(temperature);
  const filteredItems = clothingItems.filter(
    (item) => item.weather.toLowerCase() === weatherType,
  );
  return (
    <main className="main">
      <WeatherCard temperature={temperature} />
      <ul className="clothing-section">
        {filteredItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </ul>
    </main>
  );
}

export default Main;
