import sunnyDay from "../assets/weather/headers/day/Sunny_Day.svg";
import cloudyDay from "../assets/weather/headers/day/Cloudy_Day.svg";
import rainDay from "../assets/weather/headers/day/Rainy_Day.svg";
import stormDay from "../assets/weather/headers/day/Stormy_Day.svg";
import snowDay from "../assets/weather/headers/day/Snowy_Day.svg";
import fogDay from "../assets/weather/headers/day/Foggy_Day.svg";

import sunnyNight from "../assets/weather/headers/night/Sunny_Night.svg";
import cloudyNight from "../assets/weather/headers/night/Cloudy_Night.svg";
import rainNight from "../assets/weather/headers/night/Rainy_Night.svg";
import stormNight from "../assets/weather/headers/night/Stormy_Night.svg";
import snowNight from "../assets/weather/headers/night/Snowy_Night.svg";
import fogNight from "../assets/weather/headers/night/Foggy_Night.svg";

const headerImages = {
  day: {
    sunny: sunnyDay,
    cloudy: cloudyDay,
    rain: rainDay,
    storm: stormDay,
    snow: snowDay,
    fog: fogDay,
  },
  night: {
    sunny: sunnyNight,
    cloudy: cloudyNight,
    rain: rainNight,
    storm: stormNight,
    snow: snowNight,
    fog: fogNight,
  },
};

export { headerImages };
