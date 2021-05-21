const cityPresenter = (city) => {
  const getCity = city.data[0];

  return {
    name: getCity.city_name,
    temperature: Math.round(getCity.temp) + "ºC",
  };
};

export { cityPresenter };
