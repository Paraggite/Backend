const mongoose=require("mongoose")
const userSchema= new mongoose.Schema({
    username:{
        require:true,
        type:String
    },
    email:{
        type:String,
        require:true
    },
    rollno:{
        type:Number,
        require:true
    }
})
const serModelu=mongoose.model("users",userSchema)
module.exports=serModelu