import { useEffect, useState } from "react";
import axios from "axios";

const params = {
  city: "Curitiba",
  country: "BR",
  key: process.env.REACT_APP_API_KEY,
};

function useCity() {
  const [city, setCity] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://api.weatherbit.io/v2.0/current", { params })
        .then((res) => {
          const apiResponse = res.data;
          setCity(apiResponse);
        });
    };

    fetchData();
  }, []);

  return [city];
}

export default useCity;
