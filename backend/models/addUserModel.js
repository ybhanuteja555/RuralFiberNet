const client =require('./db');

const addNewUser = async ( {
  first_name,
  last_name,
  email,
  phone_number,
  date_of_birth,
  gender,
  password,
  address,
  status
}) =>{

    
    const query = "insert into users (first_name, last_name, email, phone_number, date_of_birth, gender, password, address, status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)"

    const result = await client.query(query,[ first_name,
        last_name,
        email,
        phone_number,
        date_of_birth,
        gender,
        password,
        address,
        status]);

        return result.rows[0];
}

module.exports = {addNewUser};