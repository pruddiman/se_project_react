import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import {
  getTemperatureCategory,
  getTimeOfDay,
  getWeatherCategory,
} from "../../utils/weatherApi";
import { headerImages } from "../../utils/headerImages";

function Main({ clothingItems, temperature, weatherMain, onCardClick }) {
  const clothingCategory = getTemperatureCategory(temperature);
  const filteredItems = clothingItems.filter(
    (item) => item.weather.toLowerCase() === clothingCategory,
  );
  const timeOfDay = getTimeOfDay();
  const weatherType = getWeatherCategory(weatherMain);
  const headerImage = headerImages[timeOfDay][weatherType];
  return (
    <main className="main">
      <WeatherCard temperature={temperature} />
      <img
        src={headerImage}
        alt={clothingCategory}
        className="header__weather-image"
      />
      <ul className="clothing-section">
        {filteredItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </ul>
    </main>
  );
}

export default Main;
