const pool = require("../../db");
const querys = require("../../query/searchQueries");

class searchSessionsByDocID {
    static async SearchSessionDetailsByDocID(id) {
      try {
        const uid=parseInt(id);

        if (!uid || isNaN(uid)) {
            throw new Error('Invalid userId');
          }

        const result = await pool.query(querys.getSessionsById,[uid]);
        const user = result.rows;
        
        return user;
      } catch (error) {
        console.error('Error executing query:', error.message);
        throw new Error('Error retrieving user details');
      }
    }
}
module.exports=searchSessionsByDocID;