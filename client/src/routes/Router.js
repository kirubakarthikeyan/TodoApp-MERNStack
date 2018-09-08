import {BrowserRouter,Route,Switch} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';

import Header from '../components/Header';
import Card from '../components/Card';
import Code from '../components/Code';
import Todo from '../components/codeTodo';

import Item from '../components/showTodo';


const routes = ()=>
{

return(

<BrowserRouter>
<div>
<Header/>
    <Switch>
    
    <Route path="/" component={Code} exact={true} />
    
    <Route path="/code" component={Code}  />
    <Route path="/todos/:id" component={Item}  />

  
    
    </Switch>
    
    </div>
    </BrowserRouter>



)

}


export default routes;