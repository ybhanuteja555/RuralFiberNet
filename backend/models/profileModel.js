const client = require('./db');


const getProfileDetails = async (email) =>{

const query = 'Select * from users left join user_package_mapping on users.user_id = user_package_mapping.user_id left join packages on packages.package_id = user_package_mapping.package_id where users.email = $1';

const result = await client.query(query , [email]);
console.log(result.rows);
return result.rows[0];
}

module.exports = {getProfileDetails};