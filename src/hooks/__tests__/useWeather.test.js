import useWeather from "../useWeather";
import { renderHook } from "@testing-library/react-hooks";

describe("useWeather", () => {
  describe("#run", () => {
    it("get all cities", () => {
      const { result } = renderHook(useWeather);

      expect(result.current[0][0]).toStrictEqual({
        name: "Rio de Janeiro",
        min: "17º",
        max: "23º",
      });
    });
  });
});
