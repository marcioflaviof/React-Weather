const cityPresenterDetails = (city) => {
  const getCity = city.data[0];

  return {
    name: getCity.city_name,
    country: getCity.country_code,
    temperature: Math.round(getCity.temp) + "ºC",
    weather: getCity.weather.description,
    feelsLike: Math.round(getCity.app_temp) + "ºC",
    wind: Math.round(getCity.wind_spd * 3.6) + "km/h", //Changing m/s to km/h
    humidity: Math.round(getCity.rh) + "%",
  };
};

export { cityPresenterDetails };
