const viewUserModel = require('../models/viewUsersModel');

const viewAllUsers = async (req , res) =>{

    const users = await viewUserModel.getAllUsers();

    return res.status(200).json(users);
}

module.exports ={viewAllUsers};