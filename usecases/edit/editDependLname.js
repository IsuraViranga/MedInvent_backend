const pool = require("../../db");
const querys = require("../../query/editQueries");

class EditDependLname {
    static async editLname(body,userId) {
      try {
        const temp =parseInt(userId);
        const{dID,Lname}=body;
        if (!temp || isNaN(temp)) {
            throw new Error('Invalid userId');
          }
        // Perform a query to update dependent details
        let finalResult="fail";
        const result = await pool.query(querys.updateDepndLname,[Lname,dID,temp]);
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
module.exports=EditDependLname;