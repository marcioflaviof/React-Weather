const cityPresenter = (city) => {
  return {
    name: city.city_name,
    temperature: Math.round(city.temp) + "ºC",
  };
};

export { cityPresenter };
