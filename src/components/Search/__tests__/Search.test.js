import React from "react";
import renderer from "react-test-renderer";
import Search from "../Search";

it("renders correctly", () => {
  const search = renderer.create(<Search />).toJSON();

  expect(search).toMatchSnapshot();
});
