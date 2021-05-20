import React from "react";
import renderer from "react-test-renderer";
import Cities from "../Cities";

const weather = [
  { name: "Rio de Janeiro", min: "17º", max: "23º" },
  { name: "São Paulo", min: "14º", max: "22º" },
  { name: "Belo Horizonte", min: "21º", max: "32º" },
  { name: "Brasília", min: "24º", max: "37º" },
  { name: "Belém", min: "24º", max: "37º" },
  { name: "Salvador", min: "23º", max: "37º" },
  { name: "Curitiba", min: "5º", max: "14º" },
  { name: "Fortaleza", min: "21º", max: "32º" },
  { name: "Manaus", min: "24º", max: "37º" },
  { name: "João Pessoa", min: "28º", max: "40º" },
];

jest.mock("../../../hooks/useWeather", () => {
  return () => {
    return [weather];
  };
});

it("renders correctly", () => {
  const cities = renderer.create(<Cities />).toJSON();

  expect(cities).toMatchSnapshot();
});
