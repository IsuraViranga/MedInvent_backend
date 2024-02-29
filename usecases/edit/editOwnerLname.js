const pool = require("../../db");
const querys = require("../../query/editQueries");

class EditOwnerLname {
    static async editLname(body,userId) {
      try {
        const temp =parseInt(userId);
        const{Lname}=body;
        if (!temp || isNaN(temp)) {
            throw new Error('Invalid userId');
          }
        // Perform a query to update dependent details
        let finalResult="fail";
        const result = await pool.query(querys.updateOwnerLname,[Lname,temp]);
        if(result.rowCount==1)
        {
            finalResult="success";
        }
        return finalResult;
      } catch (error) {
        console.error('Error executing query:', error.message);
        throw new Error('Error retrieving user details');
      }
    }
    // Add other business logic for user-related operations...
}
module.exports=EditOwnerLname;