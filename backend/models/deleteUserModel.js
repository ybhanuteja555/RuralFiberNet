const client = require('./db');

const deleteUser = async (user_id) =>{
    try{
    const query = 'delete from users where users.user_id =$1';

    const result = await client.query(query,[user_id]);

    console.log(result.rowCount);
    return result.rowCount;
    }
    catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
}
module.exports = {deleteUser};