import { WeatherContext } from "./Context";
import useCity from "../../hooks/useCity";
import { useState } from "react";

const defaultParams = {
  city: "Curitiba",
  country: "BR",
};

function Provider({ children }) {
  const [params, setParams] = useState(defaultParams);
  const [city] = useCity({ ...params, country: "BR" });

  return (
    <WeatherContext.Provider value={{ city, setParams }}>
      {children}
    </WeatherContext.Provider>
  );
}

export default Provider;
