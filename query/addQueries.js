const checkMailExist = "SELECT EXISTS(SELECT 1 FROM PatientUser WHERE email = $1)";

const checkNICExist="SELECT COUNT(*) FROM DependMember WHERE userID=$1 AND nic=$2 GROUP BY nic";

const addOwner = "INSERT INTO PatientUser(userID,email,Fname, Lname, nic, gender, dob,mobileNo,picPath,lineOne,lineTwo,city,postalCode,distric) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)";

const addDataToPrescriptiontableFormat_01="INSERT INTO Prescription(presType,presname,userID) VALUES($1,$2,$3) RETURNING presID";

const addDataToPrescriptiontableFormat_02=`INSERT INTO Prescription(relatedID,presType,presname,userID)
VALUES($1,$2,$3,$4)
RETURNING presID`;

const addMedicineToTable=`INSERT INTO Medicine(medName,dosage,frequency,befo_afte_meal,quantity,days,days,picPath)
VALUES($1,$2,$3,$4,$5,$6,$7,$8)
RETURNING medID`;

const addReminderToTable=`INSERT INTO ReminderMed(medID,remTime) 
VALUES($1,$2)
`;

const addDepend = "INSERT INTO DependMember(userID,dID,Fname,Lname,dob,relationship,gender,picPath) VALUES($1,$2,$3,$4,$5,$6,$7,$8)";


module.exports={
    checkMailExist,addOwner,addDataToPrescriptiontableFormat_01,addDataToPrescriptiontableFormat_02,addMedicineToTable,addReminderToTable,checkNICExist,addDepend,
}