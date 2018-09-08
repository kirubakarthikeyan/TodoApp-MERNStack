
const initialState = null


export default function(state=initialState,action)
{

    const GET_PROJECT = "GET_PROJECT";
    // const GET_SPECIFIC_PROJECT = "GET_SPECIFIC_PROJECT";
    
    const ADD_PROJECT = "ADD_PROJECT";
    const DELETE_PROJECT ="DELETE_PROJECT";
    const EDIT_INDIVIDUALPROJECT_CHECKBOX ="EDIT_INDIVIDUALPROJECT_CHECKBOX";
    const EDIT_PROJECT = "EDIT_PROJECT";
    


   

switch(action.type)
{

case GET_PROJECT:
return action.payload || false

// case GET_SPECIFIC_PROJECT:
// return  {
//     ...state,
//     data:action.payload
// }


case ADD_PROJECT:
return action.payload


case DELETE_PROJECT:
return action.payload

case EDIT_INDIVIDUALPROJECT_CHECKBOX:
return action.payload

case EDIT_PROJECT:
return action.payload


default:
return state;

}

} 