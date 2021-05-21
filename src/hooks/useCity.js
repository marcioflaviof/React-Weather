import axios from "axios";
import { useEffect, useState } from "react";
import { cityPresenter } from "../presenters/CityPresenter";

const params = {
  city: "Rio de Janeiro",
  country: "BR",
  key: process.env.REACT_APP_API_KEY,
};

function useCity() {
  const [city, setCity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(process.env.REACT_APP_API_QUERY, { params })
        .then((res) => {
          const apiResponse = res.data;
          setCity(cityPresenter(apiResponse));
        });
    };

    fetchData();
  }, []);

  return [city];
}

export default useCity;
