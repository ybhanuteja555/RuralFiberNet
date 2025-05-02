const client = require('./db');

const editUser = async ([user_id,
    first_name,
    last_name,
    email,
    phone_number,
    date_of_birth,
    gender,
    password,
    address,
    status]) =>{

    

        const query = "update users set first_name=$2, last_name = $3, email=$4, phone_number =$5, date_of_birth =$6, gender=$7, address = $8, status=$9 where users.user_id = $1" ;
        const result = await client.query(query,[user_id,
            first_name,
            last_name,
            email,
            phone_number,
            date_of_birth,
            gender,
            address,
            status
        ]);
            console.log(result.rowCount);
            return result.rowCount;
}
module.exports = {editUser};