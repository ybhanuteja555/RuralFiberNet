const userModel = require('../models/addUserModel');

const addUser = async (req,res) =>{
    console.log(req.body);
    const {
        first_name,
        last_name,
        email,
        phone_number,
        date_of_birth,
        gender,
        password,
        address,
        status
      } = req.body;

    const result = await userModel.addNewUser( {
        first_name,
        last_name,
        email,
        phone_number,
        date_of_birth,
        gender,
        password,
        address,
        status
      });

    return res.status(200).json(result);
}
module.exports = {addUser};