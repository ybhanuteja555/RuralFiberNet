const client = require('./db');

const getCompliantDetails = async (email)=>{
    try{

        const query = 'select * from users,complaints,complaint_attachments where users.email = $1 and users.user_id = complaints.user_id and complaints.complaint_id = complaint_attachments.complaint_id';

        console.log(email);
        const result = await client.query(query,[email]);
        console.log(result.rows);
        return  result.rows;

    }
    catch(error)
    {
        console.error("error fetching complaint history",error);
    }
}

module.exports = {getCompliantDetails};