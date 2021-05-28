import axios from "axios";
import { useEffect, useState } from "react";
import { cityPresenterDetails } from "../presenters/CityPresenterDetails";

function useCity(params) {
  const [city, setCity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(process.env.REACT_APP_WEATHERBIT_API, { params })
        .then((res) => {
          const apiResponse = cityPresenterDetails(res.data.data[0]);
          setCity(apiResponse);
        })
        .catch((error) => console.log(error));
    };

    fetchData();
  }, [params]);

  return [city];
}

export default useCity;
