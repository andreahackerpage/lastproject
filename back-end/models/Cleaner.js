const Schema = require("mongoose").Schema;
const cleanerSchema = new require("mongoose").Schema({
    
    name:{
        type:String
    },
    lastname:{
        type:String,
        required:true
    },
  
    avatar:{
      type:String,
      default: "http://hqhomeopatia.com/escuela/wp-content/uploads/2017/02/avatar.png"
    },
    email:{
      type:String,
      required:true
    },
    address:{
      type:String,
      required:true
    },
    password:{
        type:String
    }
  
});

module.exports = require("mongoose").model("Cleaner", cleanerSchema);