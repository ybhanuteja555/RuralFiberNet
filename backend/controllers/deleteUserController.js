const deleteModel = require('../models/deleteUserModel');

const deleteUser = async (req , res)=>{

    const user_id = req.params.id;
    console.log(user_id);
    const result = await deleteModel.deleteUser(user_id);

    if(result === 0)
    {
        return res.status(500).json("user not found");
    }
    return res.status(200).json(result);
}

module.exports = {deleteUser};