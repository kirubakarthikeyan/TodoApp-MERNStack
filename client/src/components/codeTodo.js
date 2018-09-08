import React from 'react';
import {connect} from 'react-redux';
import  * as action from '../actions/actions';
import { setTimeout } from 'timers';
import '../../node_modules/uikit/dist/css/uikit.css'
import '../../node_modules/uikit/dist/js/uikit'
import Modal from './modal';
import Alert from './alert';
import {Link} from 'react-router-dom';
import '../../node_modules/font-awesome/css/font-awesome.css'; 
 class Todo extends React.Component
{
state={switch_back:true,Todo:"default",id:"",alert:"",project_id:""}


getProjects()
{
    this.props.getProject();
}
componentDidMount()
{
    this.props.getProject();


}

updateTodoCheckbox(e,project_id)
{

var check = e.target.checked;

this.props.checkProject(check,project_id)

}

passid(id)
{
this.props.getProjectTodo(id);
setTimeout(()=>
{
    this.setState({switch_back:false});

},200)




}




onClickDeleteProject(project_id)
{

this.props.deleteProject(project_id);

}



renderList()
{

    if(this.props.code==null || undefined)
    {
        return <h1>LOADING</h1>
    }
    if(this.props.code!=undefined)
    {
        var elements = this.props.code.map((item)=>
        {
        
        return <li >
             <div  className="checkboxes">
             <button type="button" data-toggle="modal" data-target="#exampleModal" onClick={()=>this.setState({Todo:"editProject",project_id:item._id})} class="btn btn-warning"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
</button>

        <button  onClick={()=>{ this.onClickDeleteProject(item._id);  }} className="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i>
</button>
<input   checked={item.done} onChange={(e)=>{ this.updateTodoCheckbox(e,item._id) }}   className="uk-checkbox" type="checkbox"/>

        </div>
            <Link to={"todos/"+item._id}><div className="content">{item.name}</div></Link>
            
           
        
            
            </li>
        
        });

        return elements;

    }


}







render()
{
console.log(this.props.code)


    return(
       
        <div>
            
             <Modal id={this.state.project_id} behaviour={this.state.Todo}/>
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
       
        <ul className="ScrollStyle" style={{listStyle:"none"}}>
            {this.renderList()}
        </ul>
    </div>
    <button data-toggle="modal" data-target="#exampleModal" onClick={()=>{this.setState({Todo:"addProject"});}} style={{height:"80px",width:"20%",backgroundColor:"#8f979e"}} class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"><i class="fa fa-plus" aria-hidden="true"></i> Project</button>

    </div>
    
    )





    

}
}

const mapToPops = (state)=>
{
return {
code:state.code,
item:state.item,
message:state.message
    
}

}

export default connect(mapToPops,action)(Todo);