/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";

function ReadOnlyRow(props) {
  const {campaign_name,company_name, type_of}=props.campaignData;
  return (
    <tr>
      <td>{campaign_name}</td>
      <td>{company_name}</td>
      <td>{type_of}</td>
      <td>
        <button type="button" onClick={() => { props.editCampaign() }} >
            Edit
        </button>
        <button type="button" onClick={() => { props.deleteCampaign() }} >
            Delete
        </button>
      </td>
    </tr>
  );
}

function edit_dispatch(dispatch, props) {
  const newCampaignData = prompt("Type here");
  const {id}=props.campaignData;
  dispatch({ type: "HANDLE_EDIT_CLICK", payload: { editID: id, data: newCampaignData } });
}

function delete_dispatch(dispatch, props) {
  const {id}=props.campaignData;
  dispatch({ type: "HANDLE_DELETE_CLICK", payload: id })
}


const mapDispatchToProps = (dispatch, props) => {
  return {
    editCampaign: () => { edit_dispatch(dispatch, props) },
    deleteCampaign: () => { delete_dispatch(dispatch, props) }
  }
}

const mapStateToProps = state => (
  {
    campaign: state.campaign
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(ReadOnlyRow);