const mongoose=require("mongoose")
const connectDb=async(req,res)=>{
    try {
        let res= await mongoose.connect("mongodb://0.0.0.0/day8")
        if(res){
            console.log("mongodb connected")
        }
    } catch (error) {
     console.log("error in mongodb",error)   
    }
}
module.exports=connectDb