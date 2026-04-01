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

export function getWeatherCondition(temp) {
  if (temp >= 86) return "hot";
  if (temp >= 66) return "warm";
  return "cold";
}
