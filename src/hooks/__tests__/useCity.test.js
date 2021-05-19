import useCity from "../useCity";
import { renderHook } from "@testing-library/react-hooks";

describe("useCity", () => {
  describe("#run", () => {
    it("get city details", () => {
      const { result } = renderHook(useCity);

      expect(result.current[0]).toStrictEqual({
        name: "Niterói",
        state: "RJ",
        country: "Brasil",
        temp: "20ºC",
        weather: "Nublado",
        min_temp: "16º",
        max_temp: "25º",
        sensation: "19ºC",
        wind: "18km/h",
        humidity: "89%",
        weekDays: {
          dayOne: {
            name: "Terça",
            min: "18º",
            max: "26º",
          },
          dayTwo: {
            name: "Quarta",
            min: "18º",
            max: "28º",
          },
          dayThree: {
            name: "Quinta",
            min: "19º",
            max: "30º",
          },
          dayFour: {
            name: "Sexta",
            min: "23º",
            max: "35º",
          },
          dayFive: {
            name: "Sábado",
            min: "23º",
            max: "37º",
          },
        },
      });
    });
  });
});
