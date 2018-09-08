
import axios  from 'axios';

export const getProject = ()=>
{

return function(dispatch)
{
    axios.get("/api/projects").then((res)=>dispatch({type:'GET_PROJECT',payload:res.data}));

}

}

//ADD A PROJECT


export const addProject = (data)=>
{

return function(dispatch)
{
    axios.post("/api/create/project",{data:data}).then((res)=>dispatch({type:'ADD_PROJECT',payload:res.data}));

}

}


//DELETE A PROJECT
export const deleteProject = (project_id)=>
{

return function(dispatch)
{
    axios.get(`/api/projects/delete/${project_id}`).then((res)=>dispatch({type:'DELETE_PROJECT',payload:res.data}));

}

}



//GETTING A TODO UNDER A PROJECT

export const getProjectTodo = (id)=>
{


return function(dispatch)
{
    axios.get(`/api/projects/${id}`).then((res)=>dispatch({type:'GET_SPECIFIC_PROJECT',payload:res.data})).catch(err=>
    {
        dispatch({type:"GET_SPECIFIC_PROJECT",payload:[]})

    })

       

  
}

}

//ADDING A TODO UNDER A PROJECT

export const addProjectTodo =(id,data) =>
{

return function(dispatch)
{
    axios.post(`/api/projects/todo/create/${id}`,{data:data}).then((res)=>dispatch({type:"ADD_PROJECT_TODO",payload:res.data}))
}

}

//UPDATE CHECKBOX UNDER A PROJECT


export const checkProject = (data,project_id) =>
{


return  function(dispatch)
{

    axios.post(`/api/projects/check/${project_id}`,{data:data}).then((res)=>dispatch({type:"EDIT_INDIVIDUALPROJECT_CHECKBOX",payload:res.data}));

}



    
}





//UPDATE CHECKBOX UNDER A PROJECT TODO

export const checkProjectTodo = (id,data,project_id) =>
{


return  function(dispatch)
{

    axios.post(`/api/projects/todo/check/${project_id}`,{todo:id,data:data}).then((res)=>dispatch({type:"EDIT_PROJECT_CHECKBOX",payload:res.data}));

}



    
}


//DELETE A TODO UNDER A PROJECT

export const deleteProjectTodo = (id,project_id) =>
{


return  function(dispatch)
{

    axios.post(`/api/projects/todo/delete/${project_id}`,{id:id}).then((res)=>dispatch({type:"DELETE_PROJECT_TODO",payload:res.data}));

}



    
}



//EDIT PROJECT


export const editProject =(project_id,data)=>
{


return function(dispatch)
{

axios.post(`/api/projects/edit/${project_id}`,{name:data}).then((res)=>dispatch({type:"EDIT_PROJECT",payload:res.data}));

}


}


//EDIT TODO


export const editProjectTodo =(project_id,data,todo_id)=>
{


return function(dispatch)
{

axios.post(`/api/projects/todo/edit/${project_id}`,{id:todo_id,name:data}).then((res)=>dispatch({type:"EDIT_PROJECT_TODO",payload:res.data}));

}


}