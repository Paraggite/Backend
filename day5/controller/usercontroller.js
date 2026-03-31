const serModelu = require("../model/user.model")
const sermodelu=require("../model/user.model")
const createusercontroller=async(req,res)=>{
    try {
        let{username,email,rollno}=req.body
        if(!username||!email||!rollno){
          return  res.send("all feilds required")
        }
      let newuser=await serModelu.create({
        username: username,
        email:email,
        rollno:rollno
      })
      if(!newuser){
        return res.send("something went wrong")
      }
      return res.send(newuser)
    } catch (error) {
        res.send("error in creating user",error)
    }
}
const getallusercontroller=async(req,res)=>{
    try {
        let alluser=await serModelu.find()
        if(!alluser)
            return res.send("error in allusers")
         return res.send(alluser)
    } catch (error) {
        res.send("error in getting all users",error)
    }
}
const getsingleusercontroller=async(req,res)=>{
    try {
        let id= req.params.id
        if(!id){
            return res.send("id not found")
        }
        const user= await serModelu.findById(id)
        if(!user){return res.send("user not found")}
         return  res.send(user) 
        
    } catch (error) {
        res.send("error in getting single user")
    }
}
const updateusercontroller = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID not found" });
    }

    const existinguser = await serModelu.findById(id);

    if (!existinguser) {
      return res.status(404).json({ message: "User not found" });
    }

    const { username, rollno, email } = req.body;

    if (!username || !rollno || !email) {
      return res.status(400).json({ message: "All fields required" });
    }

    const updateduser = await serModelu.findByIdAndUpdate(
      id,
      {
        username,
        rollno,
        email,
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "User Updated",
      user: updateduser,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Error in updation",
      error: error.message,
    });
  }
};
const deletecontroller=async(req,res)=>{
    try {
        let id=req.params.id
    if(!id){
        return res.send("id not found")
    }
    let delid=await serModelu.findByIdAndDelete(id)
    return res.send("user deleted")
    } catch (error) {
        return res.send("error in deletion")
    }

}
module.exports={
 deletecontroller,
updateusercontroller,
getsingleusercontroller,
getallusercontroller,
createusercontroller
}