const pool = require("../../db");
const querys = require("../../query/searchQueries");

class searchDoctorByName {
  static async getDoctorNamesAndIDs(getbody) {
    try {

      const {typedName} = getbody;
      let finalResult="";

      if(typedName.length==0)
      {
        finalResult="enter name";
        return finalResult;
      }   

      const nameParts = typedName.split(' ');
      let Fname = '';
      let Lname = '';

      if (nameParts.length > 1) {
        Fname = nameParts[0];
        Lname = nameParts.slice(1).join(' ');
        finalResult= await pool.query(querys.getNamesAndID,[Fname,Lname]);
      } else {
        Fname = typedName;
        finalResult= await pool.query(querys.getNamesAndIDfirstName,[Fname]);
      }

      if(finalResult.rowCount>=1)
      {
        return finalResult;
      }
      else{
        finalResult="not found";
        return finalResult;
      }
      
    } catch (error) {
      console.error('Error executing query:',error.message);
      throw new Error('Error occurred when adding new Dependent');
    }
  }
}

module.exports =searchDoctorByName;
