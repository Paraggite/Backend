const mongoose=require("mongoose")
const connectDb=()=>{
    try {
     const res= mongoose.connect("mongodb://0.0.0.0/day6")   
     if(res){
        console.log("mongodb connected")
     }
    } catch (error) {
        console.log("error is there in connecting database")
    }
}
module.exports=connectDb;