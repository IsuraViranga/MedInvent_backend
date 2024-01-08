const checkExistWithEmail = "SELECT EXISTS(SELECT 1 FROM temporary_user_data WHERE email = $1 AND user_password = $2)";
const checkExistWithMobile = "SELECT EXISTS(SELECT 1 FROM temporary_user_data WHERE mnumber = $1 AND user_password = $2)";

module.exports={
    checkExistWithEmail,checkExistWithMobile,
}