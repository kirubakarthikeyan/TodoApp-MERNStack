var mongoose = require("mongoose");


// INCLUDE SCHEMAS



 


//PROJECT - WHICH HAS INDIVIDUAL TODOS 

var projectSchema = new mongoose.Schema({


name:String,
done:Boolean,
todos:[{
    item:String,
    done:Boolean,
    description:String
}]




});



module.exports = mongoose.model("projects",projectSchema);