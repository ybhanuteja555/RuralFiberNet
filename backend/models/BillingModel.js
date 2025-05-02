const client = require('./db');

const getBillingHistory = async(email)=>{

    try{
    const query ='select * from Subscription,users where users.email = $1 and users.user_id = Subscription.user_id';

    const result = await client.query(query,[email]);

    return result.rows;
    }
    catch(error){
        console.error("error fetching subscription history",error);
    }
}
module.exports = {getBillingHistory};