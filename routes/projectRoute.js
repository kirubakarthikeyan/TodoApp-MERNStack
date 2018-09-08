var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");


//SETUP

router.use(bodyParser.urlencoded({ extended: false }))
 

router.use(bodyParser.json());


//REQUIRE MODELS

var project = require("../models/projectModel");


//CREATE A PROJECT

router.post("/create/project",(req,res)=>
{


var data = req.body.data
    var newProject = new project({

        name:data,
        done:false
              
        });
        newProject.save((err,proj)=>{
        
        
        project.find({},(err,data)=>
        {

            res.send(data);

        })
        
        });
        
});




// CREATE A TODO UNDER A PROJECT

router.post("/projects/todo/create/:id",(req,res)=>
{

var id = req.params.id;
var data = req.body.data;
    project.findById(id,function(err,foundData){

        if(!err)
        {        
            foundData.todos.push({
        
                item:data,
                done:false,
                description:"felt tired so cant commit"
        
            });
        
            foundData.save((err,data)=>{


               
                project.findById(id,function(err,data){


                    res.send(data);
                })


            });
               
        }
        else
        {
        console.log(err);       
        }
        
        })
});




//EDIT A TODO NAME UNDER A PROJECT


router.post("/projects/todo/edit/:id",(req,res)=>
{

var project_id = req.params.id;
var formData = {

id:req.body.id,
todoName:req.body.name

}


project.findById(project_id,(err,data)=>
{
   
    data.todos.id(formData.id).item=formData.todoName;
    data.save((err,success)=>{

        res.send(success);

    });


});

    


});



//DELETE A TODO UNDER A PROJECT

router.post("/projects/todo/delete/:id",(req,res)=>
{

var project_id = req.params.id;
var formData = {

id:req.body.id,


}


    project.findById(project_id,(err,data)=>
{

  
    data.todos.id(formData.id).remove();
    data.save((err,success)=>{



        res.send(success);

    });


})
});



//GET ALL PROJECTS 

router.get("/projects",(req,res)=>
{

project.find({},(err,data)=>
{

res.json(data);
console.log(data);

});




});



//GET A SPECIFIC PROJECT

router.get("/projects/:id",(req,res)=>
{
var id = req.params.id;
project.findById(id,(err,data)=>{res.json(data);console.log(data)});

});


//EDIT A SPECIFIC PROJECT


router.post("/projects/edit/:id",(req,res)=>
{

    var id = req.params.id;
    var formData = {

        name:req.body.name
    }

project.findByIdAndUpdate(id,{name:formData.name},(err,success)=>
{

project.find({},(err,data)=>
{

res.send(data);
console.log(data);

})


})

});


//DELETE A SPECIFIC PROJECT


router.get("/projects/delete/:id",(req,res)=>
{

var id = req.params.id;

project.findByIdAndRemove(id,(err,success)=>
{

project.find({},(err,data)=>
{

res.json(data);
console.log(data);

});


});

});



//CHECKBOX PROJECT

router.post("/projects/check/:id",(req,res)=>
{
    var project_id = req.params.id;
    var data = req.body.data;

    project.findByIdAndUpdate(project_id,{done:data},(err,data)=>
    {

        
        data.save((err,success)=>
        {

            project.find({},(err,data)=>
        {

            res.send(data);
            console.log(data);
        })

        })

    })

})




//CHECKBOX PROJECT TODO


router.post("/projects/todo/check/:id",(req,res)=>

{


var project_id = req.params.id;
var data = {

    todo_id:req.body.todo,
    data:req.body.data
}



project.findById(project_id,(err,project)=>
{


project.todos.id(data.todo_id).done=data.data;
project.save((err,success)=>
{
   
   res.send(success);
   console.log(success);
})

})

});


/*

PROJECT CRUD TABLE   //               KIRUBA KARTHIKEYAN

CRUD                                       PATH
                       
CREATE PROJECT                        /create/project
GET SPECIFIC    						/projects/:id
EDIT PROJECT                           /projects/edit/id
DELETE PROJECT                          /projects/delete/id
CREATE TODO                            /projects/todo/create/id
EDIT TODO                             /projects/todo/edit/id
DELETE TODO                             /projects/todo/delete/:id

*/












module.exports = router;