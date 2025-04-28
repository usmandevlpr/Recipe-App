import mongoose from "mongoose";

const user_schema=new mongoose.Schema({
fullname:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
file:{
    type:String,
    default:""
},
user_recipes:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Recipe"
},
saved_recipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe"
}],

},
{
    timestamps:true
})

const User=mongoose.model("User",user_schema)
export default User;