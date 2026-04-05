import { API_KEY, LATITUDE, LONGITUDE } from "./constants";

export function getWeather() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&units=imperial&appid=${API_KEY}`,
  ).then((res) => {
    if (!res.ok) {
      throw new Error(`Weather API error: ${res.status}`);
    }
    return res.json();
  });
}

export function getTemperatureCategory(temp) {
  if (temp >= 86) return "hot";
  if (temp >= 66) return "warm";
  return "cold";
}

export function getWeatherCategory(main) {
  if (main === "Clear") return "sunny";
  if (main === "Clouds") return "cloudy";
  if (main === "Rain" || main === "Drizzle") return "rain";
  if (main === "Thunderstorm") return "storm";
  if (main === "Snow") return "snow";
  if (main === "Mist" || main === "Haze" || main === "Fog") return "fog";

  return "sunny"; // fallback
}

export function getTimeOfDay() {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? "day" : "night";
}
