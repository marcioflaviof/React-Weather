import React from "react";
import renderer from "react-test-renderer";
import Cities from "../Cities";

it("renders correctly", () => {
  const cities = renderer.create(<Cities />).toJSON();

  expect(cities).toMatchSnapshot();
});
