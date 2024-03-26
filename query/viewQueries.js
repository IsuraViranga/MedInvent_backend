const getDependsByUserID = "SELECT * FROM dependmember WHERE temp = $1";

const getDocPrescriptionByID = 
`SELECT Prescription.presid,Prescription.addtime,Prescription.presname,Doctor.fname AS docFName,Doctor.lname AS docLName,Dependmember.fname AS depFName,Dependmember.lname AS depLName,Dependmember.relationship,Medicine.*,Remindermed.remTime
FROM Patientuser JOIN Prescription ON Patientuser.userid=Prescription.userid 
JOIN Medicine ON Prescription.userid=Medicine.presid
LEFT JOIN Remindermed ON Medicine.medid=Remindermed.medid
JOIN Doctor ON Prescription.docid=Doctor.docid
LEFT JOIN Dependmember ON Prescription.relatedid=Dependmember.did
WHERE Patientuser.userid='550e8400-e29b-41d4-a716-446655440000'
ORDER BY Prescription.addTime DESC`;

const getManualPrescriptionByID=`SELECT Prescription.presid,Prescription.addtime,Prescription.presname,Dependmember.fname AS depFName,Dependmember.lname AS depLName,Dependmember.relationship,Medicine.*,Remindermed.remTime
FROM Patientuser JOIN Prescription ON Patientuser.userid=Prescription.userid 
JOIN Medicine ON Prescription.userid=Medicine.presid
LEFT JOIN Remindermed ON Medicine.medid=Remindermed.medid
LEFT JOIN Dependmember ON Prescription.relatedid=Dependmember.did
WHERE Patientuser.userid='550e8400-e29b-41d4-a716-446655440000'
ORDER BY Prescription.addTime DESC`;
 
const getOwnerdetailsByID=`SELECT * FROM PatientUser WHERE userID=$1`;

const getDependDetailsByID=`SELECT * FROM DependMember WHERE userID=$1 AND dID=$2`;

const getClinics="SELECT clinicName FROM Sessions";

const getDoctors="SELECT Fname,Lname FROM Doctor";

const getSpecializations ="SELECT specialization FROM Doctor";


module.exports={
    getDependsByUserID,getDocPrescriptionByID,getManualPrescriptionByID,getOwnerdetailsByID,getDependDetailsByID,getClinics,getSpecializations,getDoctors,
}
