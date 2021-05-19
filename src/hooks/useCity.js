import { useEffect, useState } from "react";

const city = {
  name: "Niterói",
  state: "RJ",
  country: "Brasil",
  temp: "20ºC",
  weather: "Nublado",
  min_temp: "16º",
  max_temp: "25º",
  sensation: "19ºC",
  wind: "18km/h",
  humidity: "89%",
  weekDays: {
    dayOne: {
      name: "Terça",
      min: "18º",
      max: "26º",
    },
    dayTwo: {
      name: "Quarta",
      min: "18º",
      max: "28º",
    },
    dayThree: {
      name: "Quinta",
      min: "19º",
      max: "30º",
    },
    dayFour: {
      name: "Sexta",
      min: "23º",
      max: "35º",
    },
    dayFive: {
      name: "Sábado",
      min: "23º",
      max: "37º",
    },
  },
};

function useCity() {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    //TODO fetch with yahoo
    const fetchData = () => {
      setDetails(city);
    };

    fetchData();
  });

  return [details];
}

export default useCity;
