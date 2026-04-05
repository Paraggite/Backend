const usermodel=require("../model/user.model")
const getallusercontroller=async(req,res)=>{
try {
    const allusers=await usermodel.find()
    return res.status(200).json({
        success:true,
        message:"allusers",
        user:allusers
    })
} catch (error) {
    return res.status(500).json({
        success:false,
        message:"error in gwtting user"
    })
}
}
const getsingle=async(req,res)=>{
    try {
        let id=req.params.id
        if(!id){
            return res.status(401).json({
                message:"id not found"
            })
        }
        const user=await usermodel.findById(id)
        if(!user){
            message:"user not found"
        }
         return res.status(200).json({
            success:true,
            message:"user found",
            user
         })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"error in getting user"
        })
    }
}
const updateuser=async(req,res)=>{
try {
    const id= req.params.id
    if(!id){
        return res.status(401).json({
            message:"id not found"
        })
    }
    const existinguser=await usermodel.findById(id)
    if(!existinguser){
        message:"not a existing user"
    }
     if (!existingUser)
      return res.status(404).json({
        message: "User not found",
      });

    let { username, email, password, mobile } = req.body;

    if (!username || !email || !password || !mobile)
      return res.status(400).json({
        message: "All fields are required",
      });
    let updateduser= await usermodel.findByIdAndUpdate({id:_id},{
        username,
        email,
        password,
        mobile
    },{
        new:true,
    })
return res.status(200).json({
    success:true,
    message:"user updated",
    user:updateduser
})
} catch (error) {
    return res.status(501).json({
        success:false,
        message:"error in updating",
        error
    })
}
}
const deletingcontroller=async()=>{
    try {
        const id=req.params.id
        if(!id){
            message:"id not found"
        }
        const deluser=await usermodel.findByIdAndDelete(id)
        return res.status(200).json({
            success:true,
         message:"user deleted",
        
        })
    } catch (error) {
           return res.status(501).json({
        success:false,
        message:"error in deleting",
        error
    })
    }
}
module.exports={
   getallusercontroller,
    getsingle,
    updateuser,
    deletingcontroller
}