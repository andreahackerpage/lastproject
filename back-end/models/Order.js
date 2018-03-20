const Schema = require("mongoose").Schema;
const orderSchema = new require("mongoose").Schema({
    service:{
        type:String
    },
    rooms:Number,
    price:{
        type:Number
        
    },
    hour:{
      type:String
},
    address:{
        type:String
    }
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});
module.exports = require("mongoose").model("Order", orderSchema);