/* eslint-disable no-case-declarations */
import data from "./data.json";

const initialState = {
  campaign: data
}


function myReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {

  case "HANDLE_DELETE_CLICK":
    const campaignDataCopy = [...state.campaign];
    const indexDelete = state.campaign.findIndex((campaign) => campaign.id === payload);
    campaignDataCopy.splice(indexDelete, 1);
    return {
      campaign: campaignDataCopy
    }


  case "HANDLE_EDIT_CLICK":
    const campaignDataCopy2 = [...state.campaign];
    const indexEdit = state.campaign.findIndex((campaign) => campaign.id === payload.editID);
    campaignDataCopy2[indexEdit].campaign_name = payload.data;
    return {
      campaign: campaignDataCopy2
    }

  default: return state

  }
}

export default myReducer;
