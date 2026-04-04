const mongoose=require("mongoose")
const connectDb=async()=>{
    try {
        let res = await mongoose.connect("mongodb://0.0.0.0/day9")
        if(res){
            console.log("mongodb connected")
        }

    } catch (error) {
        console.log("error in mongodb")
    }
}
module.exports=connectDb