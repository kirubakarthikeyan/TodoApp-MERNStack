export default function(state=null,action)
{

   
    const GET_SPECIFIC_PROJECT = "GET_SPECIFIC_PROJECT";
    const ADD_PROJECT_TODO = "ADD_PROJECT_TODO";
    const EDIT_PROJECT_CHECKBOX = "EDIT_PROJECT_CHECKBOX";
    const DELETE_PROJECT_TODO ="DELETE_PROJECT_TODO";
    const EDIT_PROJECT_TODO = "EDIT_PROJECT_TODO";
    
    // const ADD_PROJECT = "ADD_PROJECT";

switch(action.type)
{

case GET_SPECIFIC_PROJECT:
return action.payload

case ADD_PROJECT_TODO:
return action.payload

// case ADD_PROJECT:
// return action.payload
case EDIT_PROJECT_CHECKBOX:
return action.payload


case DELETE_PROJECT_TODO:
return action.payload

case EDIT_PROJECT_TODO:
return action.payload


default:
return state;

}

} 