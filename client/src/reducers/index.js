import {combineReducers} from 'redux';

import codeReducer    from './codeReducer';
// import careReducer from './careReducer';
import item from './individualTodo';
// import projectTodo from './addProjectTodo';





export default combineReducers({

// project:projectReducer,
code:codeReducer,
// care:careReducer,
item:item
// message:projectTodo


});