var mongoose = require("mongoose");


var careSchema = new mongoose.Schema(
    {

        care:{
            item:String,
            done:Boolean
        }



    }
)




module.exports = mongoose.model("personalCare",careSchema);