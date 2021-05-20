import React from "react";
import renderer from "react-test-renderer";
import DetailsCard from "../DetailsCard";

it("renders correctly", () => {
  const detailsCard = renderer.create(<DetailsCard />).toJSON();

  expect(detailsCard).toMatchSnapshot();
});
