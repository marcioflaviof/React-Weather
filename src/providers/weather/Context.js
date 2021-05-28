import { createContext, useContext } from "react";

export const WeatherContext = createContext({ city: undefined });
export const useWeatherContext = () => useContext(WeatherContext);
