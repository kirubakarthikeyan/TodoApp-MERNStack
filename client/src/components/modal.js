import React from 'react';
import '../../node_modules/uikit/dist/css/uikit.css'
import '../../node_modules/uikit/dist/js/uikit'
import '../App.css';
import  '../../node_modules/jquery/dist/jquery'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/js/dist/modal';
import  * as action from '../actions/actions';
import {connect} from 'react-redux';
import { stat } from 'fs';


class Modal extends React.Component{

state={todo:""}


formBehaviour()
{
switch(this.props.behaviour)
{
    case "addTodo":
    return( <h5 className="modal-title" id="exampleModalLabel">Add TODO</h5>)
    case "addProject":
    return( <h5 className="modal-title" id="exampleModalLabel">Add Project</h5>)
    case "editProject":
    return(<h5 className="modal-title" id="exampleModalLabel">Edit Project</h5>)
    case "editProjectTodo":
    return (<h5 className="modal-title">Edit Todo</h5>)
}
}

handleInput(e)
{
this.setState({
todo:e.target.value
});

}




handleSubmit()
{

  if(this.state.todo.trim()=="" || this.state.todo.split("").length >30)
  {

    alert("viboothiya");
  }
  else{

    switch(this.props.behaviour)
    {
    case "addTodo":
    this.props.addProjectTodo(this.props.id,this.state.todo);
    this.setState({todo:""});
    break;
    case "addProject":
    this.props.addProject(this.state.todo);
    this.setState({todo:""});
    break;
    case "editProject":
    this.props.editProject(this.props.id,this.state.todo);
    this.setState({todo:""});
    break;
    case "editProjectTodo":
    this.props.editProjectTodo(this.props.id,this.state.todo,this.props.edit_id);
    this.setState({todo:""});
    break;
    default:
    alert("default state");
    
    }
  }



}


render()
{
console.log(this.props.item);
    
    return(
        
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div style={{borderRadius:"0"}} className="modal-content">
      <div style={{border:"none"}} className="modal-header">
 {this.formBehaviour()}
       
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      
        
            <form onSubmit={(e)=>e.preventDefault()}>
  <div class="form-group">
   
    <input onChange={(e)=>this.handleInput(e)} value={this.state.todo} type="text" class="form-control" id="exampleFormControlInput1" />
  </div>
</form>
            

      </div>
      <div style={{border:"none"}} className="modal-footer">
        {/* <button type="button" className="btn btn-secondary" >Close</button> */}
        <button onClick={()=>this.handleSubmit()} type="button" data-dismiss="modal"className="btn save_btn btn-primary">Save</button>
      
      </div>
    </div>
  </div>
</div>
        
    )
}


}


const mapToProps = (state)=>
{
return {
code:state.code,
item:state.item

    
}

}

export default connect(mapToProps,action)(Modal)