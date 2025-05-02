const billingModel = require('../models/BillingModel');

const billingHistory = async (req , res) =>{

    try{
    const email = req.query.mail;

    const getcontrollerBillingHistory = await billingModel.getBillingHistory(email);

    return res.status(200).json(getcontrollerBillingHistory);
    }
    catch (error) {
        // Step 6: Handle any unexpected errors during the process
        // Send a 500 Internal Server Error response if something goes wrong
        console.error('Error fetching bills :', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }

}
module.exports = {billingHistory};