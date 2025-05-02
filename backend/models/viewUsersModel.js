const client = require('./db');

const getAllUsers = async () =>{

    const query ='select * from users';

    const fetchUsers = await client.query(query,[]);
    return fetchUsers.rows;
}

module.exports = {getAllUsers};