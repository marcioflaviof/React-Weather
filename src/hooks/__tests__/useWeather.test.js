import mockedAxios from "axios";
import useWeather from "../useWeather";
import { renderHook } from "@testing-library/react-hooks";

describe("useWeather", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  describe("#run", () => {
    it("get all cities", async () => {
      const data = {
        data: {
          data: [
            {
              city_name: "Curitiba",
              temp: 10,
            },
          ],
        },
      };

      await mockedAxios.get.mockResolvedValue(data);

      const { result, waitForNextUpdate } = renderHook(() => useWeather());

      expect(result.current[0]).toStrictEqual([]);

      await waitForNextUpdate();

      expect(typeof result.current[0]).toBe("object");
      expect(result.current[0]).toStrictEqual([
        { name: "Curitiba", temperature: "10ºC" },
        { name: "Curitiba", temperature: "10ºC" },
        { name: "Curitiba", temperature: "10ºC" },
        { name: "Curitiba", temperature: "10ºC" },
        { name: "Curitiba", temperature: "10ºC" },
        { name: "Curitiba", temperature: "10ºC" },
        { name: "Curitiba", temperature: "10ºC" },
        { name: "Curitiba", temperature: "10ºC" },
        { name: "Curitiba", temperature: "10ºC" },
        { name: "Curitiba", temperature: "10ºC" },
      ]);
    });
  });
});
