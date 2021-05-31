import axios from "axios";
import { useEffect, useState } from "react";
import { cityPresenterDetails } from "../presenters/CityPresenterDetails";

function useCity(params) {
  const [city, setCity] = useState(null);

  useEffect(() => {
    let isMount = true;

    const fetchData = async () => {
      await axios
        .get(process.env.REACT_APP_WEATHERBIT_API, { params })
        .then((res) => {
          if (isMount) {
            const apiResponse = cityPresenterDetails(res.data.data[0]);
            setCity(apiResponse);
          }
        })
        .catch((error) => console.log(error));
    };

    fetchData();

    return () => { isMount = false }
  }, [params]);

  return [city];
}

export default useCity;
