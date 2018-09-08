import React from 'react';
import {connect} from 'react-redux';
import  * as action from '../actions/actions';
import { setTimeout } from 'timers';
import '../../node_modules/uikit/dist/css/uikit.css'
import '../../node_modules/uikit/dist/js/uikit'
import Modal from './modal';
import Alert from './alert';
import '../../node_modules/font-awesome/css/font-awesome.css'; 
import {Link} from 'react-router-dom';
 class Item extends React.Component
{

state ={Todo:"",project_id:"",todo_id:""}


componentDidMount()
{
    this.props.getProjectTodo(this.props.match.params.id);


}

onClickDelete(todo_id,project_id)
{
this.props.deleteProjectTodo(todo_id,project_id);



}


updateTodoCheckbox(e,todo_id,project_id)
{

var check = e.target.checked
this.props.checkProjectTodo(todo_id,check,project_id)

}



renderTodos()
{

 





if(this.props.code)
{
    var elements = this.props.code.todos.map((item)=>
    {
    
    return <li >
      <div  className="checkboxes">
      <button type="button" data-toggle="modal" data-target="#exampleModal" onClick={()=>this.setState({Todo:"editProjectTodo",todo_id:item._id})} class="btn btn-warning"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
</button>
        <button  onClick={()=>{ this.onClickDelete(item._id,this.props.code._id) ;  }} className="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"/></button>
        <input   checked={item.done} onChange={(e)=>{this.updateTodoCheckbox(e,item._id,this.props.code._id)}} className="uk-checkbox" type="checkbox"/>

        </div>
    
    <div className="content">{item.item}</div>
       
          
            
        
        
        
        </li>
    
    });

    return elements;
}

else if(this.props.code==null){
    return <h1>LOADING</h1>
}


}





render()
{
console.log(this.props.match.params.id)
console.log(this.props.code)
    return(
       
        <div>
            
             {/* <Modal behaviour={this.state.Todo}/> */}
             <Modal edit_id={this.state.todo_id} id={this.props.match.params.id} behaviour={this.state.Todo}/>
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
        <button className="btn "><Link to={"/code"}>BACK</Link></button>
        <ul className="ScrollStyle" style={{listStyle:"none"}}>
           
           {this.renderTodos()}
        </ul>
        
    </div>
    <button data-toggle="modal" onClick={()=>{this.setState({Todo:"addTodo"});}} data-target="#exampleModal" style={{height:"80px",width:"20%",backgroundColor:"#8f979e"}}  class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"><i class="fa fa-plus" aria-hidden="true"></i> Todo</button>
        
    </div>
    
    )





    

}
}

const mapToPops = (state)=>
{


    return {code:state.item}


}

export default connect(mapToPops,action)(Item);