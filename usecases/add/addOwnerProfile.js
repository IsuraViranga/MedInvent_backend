const pool = require("../../db");
const querys = require("../../query/addQueries");

class AddOwnerProfile {
    static async addNewOwner(newUser) {
      try {
        const{user_password,email,first_name,last_name,nic,gender,weight,birth_date,height,mnumber}=newUser;

        const checkMailExist = await pool.query(querys.checkMailExist,[email]);
        if(checkMailExist.rows[0].exists)
        {
            return "email already exist";
        }
        // Perform a query to add new user details 
        const result = await pool.query(querys.addOwner,[user_password,email,first_name,last_name,nic,gender,weight,birth_date,height,mnumber]);
        return "created account successfully";

      } catch (error) {
        console.error('Error executing query:', error.message);
        throw new Error('Error occoured when creating new user');
      }
    }
}
module.exports=AddOwnerProfile;