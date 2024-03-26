const pool = require("../../db");
const querys = require("../../query/addQueries");
const { v5: uuidv5 } = require('uuid');


class AddDependProfile {
  static async addNewDepend(getbody,userId) {
    try {
      const {dID,Fname,Lname,dob,relationship,gender,picPath} = getbody;
      //const temp =parseInt(userId);

      let result2,isSuccess=false;
      //check NIC already exist in database 
     /* const result1= await pool.query(querys.checkNICExist,[userId,nic]);
      if(result1.rowCount==1)
      {
        throw new Error('NIC already exist in database');
      }*/
    
      result2= await pool.query(querys.addDepend,[uuidv5(userId, uuidv5.DNS),uuidv5(dID, uuidv5.DNS),Fname,Lname,dob,relationship,gender,picPath]);
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
