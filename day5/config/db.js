const mongoose =require("mongoose")
const connectDb=async()=>{
    try {
        const res=await mongoose.connect("mongodb://0.0.0.0/day5")
        if(res){
            console.log("mongoDb connected")
        }
    } catch (error) {
        console.log("error in connecting to mongodb")
    }
}
module.exports=connectDb