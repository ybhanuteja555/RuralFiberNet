const editModel = require('../models/editUserModel');

const editUser = async (req , res)=>{

    console.log(req.body);
    const {user_id,
        first_name,
        last_name,
        email,
        phone_number,
        date_of_birth,
        gender,
        password,
        address,
        status} = req.body;

    const result = await editModel.editUser([user_id,
        first_name,
        last_name,
        email,
        phone_number,
        date_of_birth,
        gender,
        password,
        address,
        status]);

    return res.status(200).json(result);
}
module.exports = {editUser};