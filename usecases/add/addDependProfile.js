const pool = require("../../db");
const querys = require("../../query/addQueries");


class AddDependProfile {
  static async addNewDepend(getbody,userId) {
    try {
      const {Fname,Lname,dob,relationship,gender,picPath,nic} = getbody;
      const temp =parseInt(userId);
      let result2,isSuccess=false;
      //check NIC already exist in database 
      const result1= await pool.query(querys.checkNICExist,[userId,nic]);
      if(result1.rowCount==1)
      {
        throw new Error('NIC already exist in database');
      }
    
      result2= await pool.query(querys.addDepend,[temp,Fname,Lname,dob,relationship,gender,picPath,nic]);
      if(result2.rowCount)
      {
        isSuccess=true;
      }
      return isSuccess;
    } catch (error) {
      console.error('Error executing query:',error.message);
      throw new Error('Error occurred when adding new Dependent');
    }
  }
}

module.exports =AddDependProfile;
