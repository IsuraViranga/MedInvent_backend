const getDoctorById = "SELECT * FROM Doctor WHERE docID = $1";
const getNamesAndID ="SELECT Fname,Lname,docID FROM Doctor WHERE Fname = $1 AND Lname LIKE $2 || '%' ";
const getNamesAndIDfirstName="SELECT Fname,Lname,docID FROM Doctor WHERE Fname LIKE $1 || '%' ";
const getSessionsById ="SELECT * FROM Sessions WHERE AddDocID = $1";

module.exports={
    getDoctorById,getNamesAndID,getNamesAndIDfirstName,getSessionsById,
} 