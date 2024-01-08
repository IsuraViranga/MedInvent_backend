const pool = require("../../db");
const querys = require("../../query/authenticateQueries");

class AuthWithMobileCredentials {
    static async authWithMobilePassword(newUser) {
        try {
            const{user_password,mnumber}=newUser;
    
            const checkMailExist = await pool.query(querys.checkExistWithMobile,[mnumber,user_password]);
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
module.exports=AuthWithMobileCredentials;