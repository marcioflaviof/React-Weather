import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";
import nock from "nock";
import useCity from "../useCity";

axios.defaults.adapter = httpAdapter;

describe("useCity", () => {
  beforeAll(() => {
    process.env.REACT_APP_WEATHERBIT_API =
      "http://api.weatherbit.io/v2.0/current?key=my-key";
  });

  describe("#run", () => {
    const weatherMock = nock("http://api.weatherbit.io");

    const params = {
      key: "my-key",
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
      nock.cleanAll();
    });

    it("get city details", async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useCity({ city: params.city, country: params.country })
      );

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
