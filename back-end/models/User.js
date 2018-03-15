const Schema = require("mongoose").Schema;  
const PassportLocalMongoose = require ("passport-local-mongoose");
const userSchema = new require("mongoose").Schema({

    
    name:{
        type:String
    
    },
    email:{
        type:String,
        required:true
    },
    address:{
      type:String
      },
    password:{
        type:String,
        required: true
},
orders:[{
    type: Schema.Types.ObjectId,
    ref:"Service"
    
}],
},
{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});

userSchema.plugin(PassportLocalMongoose,{usernameField:"email"});
module.exports = require("mongoose").model("User", userSchema);