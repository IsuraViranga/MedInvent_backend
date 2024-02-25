const querystring = require('querystring');
const pool = require("../../db");
const querys = require("../../query/addQueries");


class AddPresByUser {
  static async addNewPrescription(newPrescription) {
    try {
      const {getPresname,getUserID,presOwnerID,medicineArray} = newPrescription;
      let result1,result2,result3;
      if(getUserID==presOwnerID)
      {
        result1= await pool.query(querys.addDataToPrescriptiontableFormat_01,["user",getPresname,getUserID]);
      }
      else if(getUserID!=presOwnerID){
        result1 = await pool.query(querys.addDataToPrescriptiontableFormat_02,[presOwnerID,"depend",getPresname,getUserID]);
      }
      for(let i=0;i<medicineArray.length;i++)
      {
        result2 = await pool.query(querys.addMedicineToTable,[medicineArray[i].medname,medicineArray[i].dosage,medicineArray[i].frequency,medicineArray[i].befor_after_meal,medicineArray[i].quantity,medicineArray[i].days,medicineArray[i].picpath,result1]);
        for(let j=0;j<medicineArray[i].reminder.length;j++)
        {
             result3 = await pool.query(querys.addReminderToTable,[result2,medicineArray[i].reminder[j]]);
        }
      }      
      return "successfully added prescription";
    } catch (error) {
      console.error('Error executing query:',error.message);
      throw new Error('Error occurred when adding new prescription');
    }
  }
}

module.exports = AddPresByUser;
