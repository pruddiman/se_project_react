import "./WeatherCard.css";
import { getTimeOfDay, getWeatherCategory } from "../../utils/weatherApi";
import { headerImages } from "../../utils/headerImages";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";

function WeatherCard({ temperature, weatherMain }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const timeOfDay = getTimeOfDay();
  const weatherType = getWeatherCategory(weatherMain);
  const headerImage = headerImages[timeOfDay][weatherType];

  return (
    <section className="weather-card">
      <div className="weather-card__image-wrapper">
        <img
          src={headerImage}
          alt={weatherType}
          className="weather-card__image"
        />
        <p className="weather-card__temp">
          {temperature}°{currentTemperatureUnit}
        </p>
      </div>
    </section>
  );
}

export default WeatherCard;
