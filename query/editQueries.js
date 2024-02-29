//update user depend profile queries set
const updateDepndpic = "UPDATE DependMember SET picPath=$1 WHERE dID=$2 AND userID=$3";
const updateDepndFname = "UPDATE DependMember SET Fname=$1 WHERE dID=$2 AND userID=$3";
const updateDepndLname = "UPDATE DependMember SET Lname=$1 WHERE dID=$2 AND userID=$3";
const updateDependRelationship = "UPDATE DependMember SET relationship=$1 WHERE dID=$2 AND userID=$3";
const updateDependNIC = "UPDATE DependMember SET nic=$1 WHERE dID=$2 AND userID=$3";
const updateDepndGender = "UPDATE DependMember SET gender=$1 WHERE dID=$2 AND userID=$3";
const updateDepndDOB = "UPDATE DependMember SET dob=$1 WHERE dID=$2 AND userID=$3";

//update account owner profile queries set
const updateOwnerpic = "UPDATE PatientUser SET picPath=$1 WHERE userID=$2";
const updateOwnerFname = "UPDATE PatientUser SET Fname=$1 WHERE userID=$2";
const updateOwnerLname = "UPDATE PatientUser SET Lname=$1 WHERE userID=$2";
const updateOwnerNIC = "UPDATE PatientUser SET nic=$1 WHERE userID=$2";
const updateDOwnerGender = "UPDATE PatientUserr SET gender=$1 WHERE userID=$2"; 
const updateOwnerDOB = "UPDATE PatientUser SET dob=$1 WHERE userID=$2";
const updateOwnerAddressOne = "UPDATE PatientUser SET lineOne=$1 WHERE userID=$2";
const updateOwnerAddressTwo = "UPDATE PatientUser SET lineTwo=$1 WHERE userID=$2";
const updateOwnerCity = "UPDATE PatientUser SET city=$1 WHERE userID=$2";
const updateOwnerDistric = "UPDATE PatientUser SET distric=$1 WHERE userID=$2";

module.exports={
    updateDepndpic,updateDepndFname,updateDepndLname,updateDependRelationship,updateDependNIC,updateDepndGender,updateDepndDOB,updateOwnerpic,updateOwnerFname,updateOwnerLname,updateOwnerNIC,updateDOwnerGender,updateOwnerDOB,updateOwnerAddressOne,updateOwnerAddressTwo,updateOwnerCity,updateOwnerDistric,
}