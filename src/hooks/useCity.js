import axios from "axios";
import { useEffect, useState } from "react";
import { cityPresenterDetails } from "../presenters/CityPresenterDetails";

const params = {
  city: "Curitiba",
  country: "BR",
};

function useCity() {
  const [city, setCity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(process.env.REACT_APP_WEATHERBIT_API, { params })
        .then((res) => {
          const apiResponse = cityPresenterDetails(res.data);
          setCity(apiResponse);
        })
        .catch((error) => console.log(error));
    };

    fetchData();
  }, []);

  return [city];
}

export default useCity;
