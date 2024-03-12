const pool = require("../../db");
const querys = require("../../query/viewQueries");

class searchSGetDoctorNames {
    static async doctorNames() {
      try {
        const result = await pool.query(querys.getDoctors);
        return result.rows;
      } catch (error) {
        console.error('Error executing query:', error.message);
        throw new Error('Error retrieving user details');
      }
    }
    // Add other business logic for user-related operations... 
}
module.exports=searchSGetDoctorNames;