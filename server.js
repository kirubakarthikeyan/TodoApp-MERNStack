var express = require("express");
var app = express();
var mongoose = require("mongoose");
var key = require("./config/keys");
var path = require("path");
var cors = require('cors');

app.use(cors());

// FOR PRODUCTION BUILD 
if(process.env.NODE_ENV==="production")
{
    app.use(express.static('client/build'));
    app.get("*",(req,res)=>
    {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    
    })
    


}






//REQUIRE ROUTES

var projectRoutes = require("./routes/projectRoute");


//CONNECT TO DB

mongoose.connect(key.mongoURI ,{ useNewUrlParser: true },(err)=>
{
    if(!err)
    console.log("CONNECTED TO DB");
    else
    console.log(err);
})




//ROUTE HANDLERS


app.use("/api",projectRoutes);






app.listen(process.env.PORT || 8080,"0.0.0.0",(err)=>
{
if(!err)
{
    console.log("Server started successfully");   
}
else{
    throw err;
}

})