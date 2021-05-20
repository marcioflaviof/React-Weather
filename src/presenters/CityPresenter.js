import { useEffect, useState } from "react";
import useCity from "../hooks/useCity";

function useCityPresenter() {
  const [city] = useCity();
  const [treatedData, setTreatedData] = useState();

  useEffect(() => {
    if (city) {
      const getCity = city.data[0];

      setTreatedData({
        name: getCity.city_name,
        country: getCity.country_code,
        temperature: Math.round(getCity.temp) + "ºC",
        weather: getCity.weather.description,
        feelsLike: Math.round(getCity.app_temp) + "ºC",
        wind: Math.round(getCity.wind_spd * 3.6) + "km/h", //Changing m/s to km/h
        humidity: Math.round(getCity.rh) + "%",
      });
    }
  }, [city]);

  return [treatedData];
}

export default useCityPresenter;
