import React from "react";
import renderer from "react-test-renderer";
import Cities from "../Cities";

const weather = [
  { name: "Rio de Janeiro", temperature: "35ºC" },
  { name: "São Paulo", temperature: "25ºC" },
  { name: "Belo Horizonte", temperature: "15ºC" },
  { name: "Brasília", temperature: "30ºC" },
  { name: "Belém", temperature: "35ºC" },
  { name: "Salvador", temperature: "33ºC" },
  { name: "Curitiba", temperature: "10ºC" },
  { name: "Fortaleza", temperature: "27ºC" },
  { name: "Manaus", temperature: "33ºC" },
  { name: "João Pessoa", temperature: "30ºC" },
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
