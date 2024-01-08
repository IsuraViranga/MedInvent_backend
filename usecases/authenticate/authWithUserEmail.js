const pool = require("../../db");
const querys = require("../../query/authenticateQueries");

class AuthWithEmailCredentials {
    static async authWithEmailPassword(newUser) {
      try {
        const{user_password,email}=newUser;

        const checkMailExist = await pool.query(querys.checkExistWithEmail,[email,user_password]);
        if(checkMailExist.rows[0].exists)
        {
            return "login successful";
        }
        else{
            return "invalid credentials"
        }

      } catch (error) {
        console.error('Error executing query:', error.message);
        throw new Error('Error occoured when creating new user');
      }
    }
}
module.exports=AuthWithEmailCredentials;