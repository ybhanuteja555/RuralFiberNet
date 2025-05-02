const client = require('./db');

const getUser =  async (email)=>{
        console.log("[DEBUG] Executing DB query for user:", email);
        const result = await client.query("Select * from users where users.email = $1",[email]);
        console.log("hiiii",result.rows[0]);
        return result.rows[0];
    }
module.exports = {getUser};