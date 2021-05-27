import React from "react";
import renderer from "react-test-renderer";
import DetailsCard from "../DetailsCard";

const details = {
  name: "Niterói",
  country: "Brasil",
  temperature: "20ºC",
  weather: "Nublado",
  wind: "18km/h",
  humidity: "89%",
};

jest.mock("../../../hooks/useCity", () => {
  return () => {
    return [details];
  };
});

it("renders correctly", () => {
  const detailsCard = renderer.create(<DetailsCard />).toJSON();

  expect(detailsCard).toMatchSnapshot();
});
