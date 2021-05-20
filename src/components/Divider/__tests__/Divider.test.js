import React from "react";
import renderer from "react-test-renderer";
import Divider from "../Divider";

it("renders correctly", () => {
  const divider = renderer.create(<Divider />).toJSON();

  expect(divider).toMatchSnapshot();
});
