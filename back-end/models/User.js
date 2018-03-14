const Schema = require("mongoose").Schema;
const PassportLocalMongoose = require("passport-local-mongoose");
const userSchema = new require("mongoose").Schema({
    name:{
        type:String
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
},
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});
module.exports = require("mongoose").model("User", userSchema);