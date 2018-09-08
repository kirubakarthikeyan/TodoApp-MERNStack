var mongoose = require("mongoose");


//EMBEDDING DATA

var codeSchema = new mongoose.Schema(
    {
        
            item:String,
            done:Boolean,
            description:String
        

    }
)




module.exports ={

model:mongoose.model("code",codeSchema),
schema :codeSchema

} 