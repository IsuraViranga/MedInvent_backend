const { editDependFname } = require("../../controller/editController");
const pool = require("../../db");
const querys = require("../../query/editQueries");

class EditOwnerFname {
    static async editFname(body,userId) {
      try {
        const temp =parseInt(userId);
        const{Fname}=body;
        if (!temp || isNaN(temp)) {
            throw new Error('Invalid userId');
          }
        // Perform a query to update dependent details
        let finalResult="fail";
        const result = await pool.query(querys.updateOwnerFname,[Fname,temp]);
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
module.exports=EditOwnerFname;