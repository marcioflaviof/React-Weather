import { useEffect, useState } from "react";
import axios from "axios";

const citiesObject = [
  { name: "Rio de Janeiro", min: "17º", max: "23º" },
  { name: "São Paulo", min: "14º", max: "22º" },
  { name: "Belo Horizonte", min: "21º", max: "32º" },
  { name: "Brasília", min: "24º", max: "37º" },
  { name: "Belém", min: "24º", max: "37º" },
  { name: "Salvador", min: "23º", max: "37º" },
  { name: "Curitiba", min: "5º", max: "14º" },
  { name: "Fortaleza", min: "21º", max: "32º" },
  { name: "Manaus", min: "24º", max: "37º" },
  { name: "João Pessoa", min: "28º", max: "40º" },
];

const params = [
  { city: "Rio de Janeiro", country: "BR", key: process.env.REACT_APP_API_KEY },
  { city: "Sao Paulo", country: "BR", key: process.env.REACT_APP_API_KEY },
  { city: "Belo Horizonte", country: "BR", key: process.env.REACT_APP_API_KEY },
  { city: "Brasilia", country: "BR", key: process.env.REACT_APP_API_KEY },
  { city: "Belem", country: "BR", key: process.env.REACT_APP_API_KEY },
  { city: "Salvador", country: "BR", key: process.env.REACT_APP_API_KEY },
  { city: "Curitiba", country: "BR", key: process.env.REACT_APP_API_KEY },
  { city: "Fortaleza", country: "BR", key: process.env.REACT_APP_API_KEY },
  { city: "Manaus", country: "BR", key: process.env.REACT_APP_API_KEY },
  { city: "Joao Pessoa", country: "BR", key: process.env.REACT_APP_API_KEY },
];

function useWeather() {
  const [cities, setCities] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      params.forEach(async (city) => {
        await axios
          .get("http://api.weatherbit.io/v2.0/current", { city })
          .then((res) => {
            const apiResponse = res.data;
            setCities((cities) => [...cities, apiResponse]);
          });
      });
    };

    fetchData();
  }, []);

  return [cities];
}

export default useWeather;
