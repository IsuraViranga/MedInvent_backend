const pool = require("../../db");
const querys = require("../../query/viewQueries");

class GetOwnerProfileDetails {
    static async getOwnerProfileDetailByID(userId) {
      try {
        const temp =parseInt(userId);

        if (!temp || isNaN(temp)) {
            throw new Error('Invalid userId');
          }

        // Perform a query to retrieve user details by ID
        const result = await pool.query(querys.getOwnerdetailsByID,[temp]);
       
        return result;
      } catch (error) { 
        console.error('Error executing query:', error.message);
        throw new Error('Error retrieving user details');
      }
    }
    // Add other business logic for user-related operations...
}
module.exports=GetOwnerProfileDetails;