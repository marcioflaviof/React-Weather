import axios from "axios";
import { useEffect, useState } from "react";
import { cityPresenterDetails } from "../presenters/CityPresenterDetails";

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
        .get(process.env.REACT_APP_WEATHERBIT_API, { params })
        .then((res) => {
          const apiResponse = res.data;
          setCity(cityPresenterDetails(apiResponse));
        });
    };

    fetchData();
  }, []);

  return [city];
}

export default useCity;
