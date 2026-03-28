const mongoose=require("mongoose")
// Schema defines the structure of the data (fields and their types)
const userSchema=new mongoose.Schema({
    name:String
})
// Model is used to interact with the collection based on the schema
const UserModel=mongoose.model("users",userSchema)
// Exporting the model to use it in other files
module.exports=UserModel