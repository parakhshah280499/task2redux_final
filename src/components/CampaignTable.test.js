/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from "react";
import { Provider } from "react-redux";
import { render } from '@testing-library/react';
import CampaignTable from "./CampaignTable";
import renderer from "react-test-renderer";
import store from "../store.js"

describe('Campaign table test',() => {
  it("First snapshot test", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <CampaignTable />
      </Provider>
    );  
    expect(asFragment()).toMatchSnapshot();
  
  });
});

