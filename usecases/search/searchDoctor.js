const pool = require("../../db");
const querys = require("../../query/searchQueries");

class SearchDoctor {
    static async getDoctorById(id) {
      try {
        const uid=parseInt(id);

        if (!uid || isNaN(uid)) {
            throw new Error('Invalid userId');
          }

        // Perform a query to retrieve user details by ID
        const result = await pool.query(querys.getDoctorById,[uid]);
  
        // Assuming there's a single user with the given ID
        const user = result.rows[0];
  
        // Business logic to process user details
        // This could involve validation, formatting, or additional processing
        return { uid: user.uid, first_name: user.first_name, email: user.email };
      } catch (error) {
        console.error('Error executing query:', error.message);
        throw new Error('Error retrieving user details');
      }
    }
    // Add other business logic for user-related operations...
}
module.exports=SearchDoctor;