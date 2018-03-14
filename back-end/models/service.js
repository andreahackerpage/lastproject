const Schema = require("mongoose").Schema;;
const serviceSchema = new require("mongoose").Schema({
    type:{
        type:String
    },
    price:{
        type:Number,
        
    },
    Hour:{
      type:Date,
},
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});
module.exports = require("mongoose").model("Service", serviceSchema);