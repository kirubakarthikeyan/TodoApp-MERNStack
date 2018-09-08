var mongoose = require("mongoose");


//EMBEDDING DATA

var readSchema = new mongoose.Schema(
    {
        
            item:String,
            done:Boolean,
            description:String
        

    }
)




module.exports = mongoose.model("read",readSchema);