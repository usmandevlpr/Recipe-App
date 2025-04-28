import mongoose from "mongoose";

const recipe_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
},
  category: {
    type: String,
    required: true,
},
  incredients: [
    {
      incredientname: { type: String },
      quantity: { type: String },
    },
],
  instruction: {
    type: String,
    required: true,
},
  recipePhoto: {
    type: String,
    default:""
},
  recipeTime:{
    type: String, // Total time as a string
    required: true, // Make it required if you want
},
created_by:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
},
recipe_by:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Recipe"
},

created_at:{
  type:Date,
  default: Date.now, // Automatically set the current date when the document is created
  required:true

},
publish:{
  type:Boolean,
 default:false 
}
,
review:{
  type:String
},
review_created:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
  }, saved: {
    type: Boolean,
    default: false
  }
});

const Recipe = mongoose.model("Recipe", recipe_schema);
export default Recipe;
