const mongoose=require("mongoose")
const userschema= new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    isadmin:{
        type:String,
        default:false
    }
},{
    timestamps:true
})
const usermodel=mongoose.model("user",userschema)
module.exports=usermodel