const complaintModel = require('../models/complaintModel');

const getcomplaintsController = async (req , res) =>{
    try{
    const email = req.query.mail;

     const compliants = await complaintModel.getCompliantDetails(email);

     return res.status(200).json(compliants);
    }
    catch(error)
    {
        console.error('Error fetching complaints details:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
} 

module.exports = {getcomplaintsController};