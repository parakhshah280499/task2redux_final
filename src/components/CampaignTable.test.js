/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from "react";
import CampaignTable from "./CampaignTable";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../store.js"


test("First snapshot test", () => {
  const component = renderer.create(
    <Provider store={store}>
      <CampaignTable />
    </Provider>
  );
  let campaign = component.toJSON();

  expect(campaign).toMatchSnapshot();

})