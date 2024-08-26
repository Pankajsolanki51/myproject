const User = require("../models/user.cjs")

async function handleGetAllUsers(req,res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handleGetUserById(req,res){
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({Error: "user not found"});
    return res.json(user);
}
async function handleUpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.is,{lastName:"changed"});
    return res.json({status:"Success"});
}
async function handleDeleteUser(req,res){
 await User.findByIdAndDelete(req.params.id);
 return res.json({status: "Success"});
};

async function handleCreateNewUser(req,res)
{
    const body = req.body;
    if(
        !body ||
        !body.first_name ||
        !body.lastName ||
        !body.email ||
        !body.gender ||
        !body.job_title
    
    ){
        return res.status(400).json({msg:"All fields are req..."});
    }

    const result = await User.create({
        firstName:"Pankaj",
        lastName:"Solanki",
        email:"ps40464@gmail.com",
        gender:"male",
        jobTile:"SWE-1"
    });
    return res.status(201).json({msg:"Sucess", id:result._id});
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUser,
    handleCreateNewUser,
}