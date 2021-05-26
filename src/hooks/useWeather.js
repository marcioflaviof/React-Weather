import { useEffect, useState } from "react";
import axios from "axios";
import { cityPresenter } from "../presenters/CityPresenter";

const params = [
  { city: "Rio de Janeiro", country: "BR" },
  { city: "Sao Paulo", country: "BR" },
  { city: "Belo Horizonte", country: "BR" },
  { city: "Brasilia", country: "BR" },
  { city: "Belem", country: "BR" },
  { city: "Salvador", country: "BR" },
  { city: "Curitiba", country: "BR" },
  { city: "Fortaleza", country: "BR" },
  { city: "Manaus", country: "BR" },
  { city: "Joao Pessoa", country: "BR" },
];

function useWeather() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      params.forEach(async (city) => {
        await axios
          .get(process.env.REACT_APP_WEATHERBIT_API, { params: city })
          .then((res) => {
            const apiResponse = res.data.data[0];
            setCities((cities) => [...cities, cityPresenter(apiResponse)]);
          });
      });
    };

    fetchData();
  }, []);

  return [cities];
}

export default useWeather;
