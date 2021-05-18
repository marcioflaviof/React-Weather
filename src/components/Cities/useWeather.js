import { useEffect, useState } from "react";

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

function useWeather() {
  const [cities, setCities] = useState(null);

  useEffect(() => {
    //TODO fetch with yahoo
    const fetchData = () => {
      setCities(citiesObject);
    };

    fetchData();
  });

  console.log(cities);

  return [cities];
}

export default useWeather;
