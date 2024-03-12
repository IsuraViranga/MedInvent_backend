const pool = require("../../db");
const querys = require("../../query/searchQueries");

class SearchAllSessionsAdvanced {
    static async getAllSessions(getbody) {
      try {
        const {Fname,Lname,specialization,sessionDate,clinicName} = getbody;
        //not completed .havet to complete
        const result = await pool.query(querys.getAllSessionsAdvanced,[]);
        const sessionDetails = result.rows;
        return sessionDetails;
      } catch (error) {
        console.error('Error executing query:', error.message);
        throw new Error('Error retrieving user details');
      }
    }
}
module.exports=SearchAllSessionsAdvanced;