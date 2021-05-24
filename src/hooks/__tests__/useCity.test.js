import mockedAxios from "axios";
import useCity from "../useCity";
import { renderHook } from "@testing-library/react-hooks";

describe("useCity", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  describe("#run", () => {
    it("get city details", async () => {
      const data = {
        data: {
          data: [
            {
              city_name: "Curitiba",
              country_code: "BR",
              temp: 10,
              weather: {
                description: "Nublado",
              },
              app_temp: 10.5,
              wind_spd: 5.8,
              rh: 85.2,
            },
          ],
        },
      };

      await mockedAxios.get.mockResolvedValueOnce(data);

      const { result, waitForNextUpdate } = renderHook(() => useCity());

      expect(result.current[0]).toStrictEqual(null);

      await waitForNextUpdate();

      expect(await result.current[0]).toStrictEqual({
        country: "BR",
        feelsLike: "11ºC",
        humidity: "85%",
        name: "Curitiba",
        temperature: "10ºC",
        weather: "Nublado",
        wind: "21km/h",
      });
    });
  });
});
