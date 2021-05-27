import axios from "axios";
import nock from "nock";
import httpAdapter from "axios/lib/adapters/http";
import { renderHook } from "@testing-library/react-hooks";
import useCity from "../useCity";

axios.defaults.adapter = httpAdapter;

describe("useCity", () => {
  describe("#run", () => {
    const weatherMock = nock("http://api.weatherbit.io");

    const params = {
      key: process.env.WEATHERBIT_KEY,
      city: "Curitiba",
      country: "BR",
    };

    const data = {
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
    };

    beforeEach(() => {
      weatherMock.persist().get("/v2.0/current").query(params).reply(200, data);
    });

    afterEach(() => {
      weatherMock.done();
    });

    it("get city details", async () => {
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
