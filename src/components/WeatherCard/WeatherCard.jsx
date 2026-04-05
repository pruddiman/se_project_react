import "./WeatherCard.css";

function WeatherCard({ temperature }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        Today is {temperature}°F / You may want to wear:
      </p>
    </section>
  );
}

export default WeatherCard;
