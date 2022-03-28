/* eslint-disable no-unused-vars */
import React from "react";
import { Provider } from "react-redux"

import CampaignTable from "./components/CampaignTable.js";
import "./App.css";
import store from "./store.js"

function App (props) {
  
  return (
    <Provider store={store}>
      <CampaignTable/>
    </Provider>
    
  );
}

export default App;
