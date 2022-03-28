/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-undef */
import myReducer from "./reducer";


describe("My Reducer", () => {

 it('should delete a task',()=> {
   const campaign = [
    {
      "id": "5c9e17581b2804c21c89f7b7",
      "campaign_name": "CAXT",
      "type_of": "SMART TRIGGER EMAIL",
      "company_name": "AUTOGRATE"
    },
    {
      "id": "5c9e175817493f1361a22519",
      "campaign_name": "UNEEQ",
      "type_of": "SMS CONNECTOR",
      "company_name": "VURBO"
    },
    {
      "id": "5c9e1758afa78406b10414d6",
      "campaign_name": "JIMBIES",
      "type_of": "PUSH EMAIL",
      "company_name": "PANZENT"
    }];
    const result = [{
      "id": "5c9e175817493f1361a22519",
      "campaign_name": "UNEEQ",
      "type_of": "SMS CONNECTOR",
      "company_name": "VURBO"
    },
    {
      "id": "5c9e1758afa78406b10414d6",
      "campaign_name": "JIMBIES",
      "type_of": "PUSH EMAIL",
      "company_name": "PANZENT"
    }];
    const deleteID = "5c9e17581b2804c21c89f7b7";
    const newState = myReducer({campaign},{
      type:"HANDLE_DELETE_CLICK",
      payload:deleteID
    });  
    
    expect(newState.campaign).toEqual(result);
 });

 it('should edit a task',()=> {
  const campaign = [
   {
     "id": "5c9e17581b2804c21c89f7b7",
     "campaign_name": "CAXT",
     "type_of": "SMART TRIGGER EMAIL",
     "company_name": "AUTOGRATE"
   },
   {
     "id": "5c9e175817493f1361a22519",
     "campaign_name": "UNEEQ",
     "type_of": "SMS CONNECTOR",
     "company_name": "VURBO"
   },
   {
     "id": "5c9e1758afa78406b10414d6",
     "campaign_name": "JIMBIES",
     "type_of": "PUSH EMAIL",
     "company_name": "PANZENT"
   }];
   const result = [{
      "id": "5c9e17581b2804c21c89f7b7",
      "campaign_name": "parakh",
      "type_of": "SMART TRIGGER EMAIL",
      "company_name": "AUTOGRATE"
    },
    {
     "id": "5c9e175817493f1361a22519",
     "campaign_name": "UNEEQ",
     "type_of": "SMS CONNECTOR",
     "company_name": "VURBO"
   },
   {
     "id": "5c9e1758afa78406b10414d6",
     "campaign_name": "JIMBIES",
     "type_of": "PUSH EMAIL",
     "company_name": "PANZENT"
   }];
   const id = "5c9e17581b2804c21c89f7b7";
   const newText = "parakh"
   const newState = myReducer({campaign},{
     type:"HANDLE_EDIT_CLICK",
     payload:{editID:id,data:newText},
   });  
   
   expect(newState.campaign).toEqual(result);
});
 
});

