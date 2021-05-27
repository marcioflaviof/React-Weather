import { useEffect, useState } from "react";
import axios from "axios";
import { cityPresenter } from "../presenters/CityPresenter";

function useWeather(params) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Promise.all(
        params.map(async (city) => {
          return axios
            .get(process.env.REACT_APP_WEATHERBIT_API, { params: city })
            .then(({ data }) => data.data[0]);
        })
      );

      setCities(result.map(cityPresenter));
    };

    fetchData();
  }, [params]);

  return [cities];
}

export default useWeather;
