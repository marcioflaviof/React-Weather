const cityPresenterDetails = (city) => {
  return {
    name: city.city_name,
    country: city.country_code,
    temperature: Math.round(city.temp) + "ºC",
    weather: city.weather.description,
    feelsLike: Math.round(city.app_temp) + "ºC",
    wind: Math.round(city.wind_spd * 3.6) + "km/h", //Changing m/s to km/h
    humidity: Math.round(city.rh) + "%",
  };
};

export { cityPresenterDetails };
