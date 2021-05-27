import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";
import nock from "nock";
import useWeather from "../useWeather";
import { renderHook } from "@testing-library/react-hooks";

axios.defaults.adapter = httpAdapter;

describe("useWeather", () => {
  const cities = [
    { city: "Rio de Janeiro", country: "BR" },
    { city: "Sao Paulo", country: "BR" },
  ];

  describe("#run", () => {
    const weatherMock = nock("http://api.weatherbit.io");

    const params = {
      key: process.env.WEATHERBIT_KEY,
      country: "BR",
    };

    beforeEach(() => {
      [
        { city_name: "Rio de Janeiro", temp: 40 },
        { city_name: "Sao Paulo", temp: 15 },
      ].forEach((city) => {
        weatherMock
          .persist()
          .get("/v2.0/current")
          .query({ ...params, city: city.city_name })
          .reply(200, { data: [city] });
      });
    });

    afterEach(() => {
      weatherMock.done();
    });

    it("get all cities", async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useWeather(cities)
      );

      expect(result.current[0]).toStrictEqual([]);

      await waitForNextUpdate();

      expect(typeof result.current[0]).toBe("object");
      expect(result.current[0]).toStrictEqual([
        { name: "Rio de Janeiro", temperature: "40ºC" },
        { name: "Sao Paulo", temperature: "15ºC" },
      ]);
    });
  });
});
