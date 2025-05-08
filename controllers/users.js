
const  userschema=require("../models/userschema");
  const getUsers = async (req, res) => {

  /*  res.status(200).json({
      status: 200,
      data: { data: users, message: "Users fetched successfully" },
    });*/
   const users=await userschema.find({});
   console.log(users);
   
  };
  
  const addUsers = async (req, res) => {
    console.log("add users");
    res.status(201).json({ message: "User added (dummy response)" });
  };
  
  const deleteUsers = async (req, res) => {
    console.log("delete users");
    res.status(200).json({ message: "User deleted (dummy response)" });
  };
  
  const getsingleUsers = async (req, res) => {
    const { userId } = req.params;
  
    const singleUser = users.find((user) => user.id == userId);
  
    if (!singleUser) {
      return res.status(404).json({
        status: 404,
        data: { data: null, message: "Invalid user ID" },
      });
    }
  
    return res.status(200).json({
      status: 200,
      data: { data: singleUser, message: "User fetched successfully" },
    });
  };
  
  module.exports = {
    getUsers,
    addUsers,
    deleteUsers,
    getsingleUsers,
  };
   

  