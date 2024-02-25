const checkMailExist = "SELECT EXISTS(SELECT 1 FROM temporary_user_data WHERE email = $1)";

const addOwner = "INSERT INTO temporary_user_data(user_password, email, first_name, last_name, nic, gender, weight, birth_date,height,mnumber) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)";

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

module.exports={
    checkMailExist,addOwner,addDataToPrescriptiontableFormat_01,addDataToPrescriptiontableFormat_02,addMedicineToTable,addReminderToTable,
}