const checkMailExist = "SELECT EXISTS(SELECT 1 FROM temporary_user_data WHERE email = $1)";
const addOwner = "INSERT INTO temporary_user_data(user_password, email, first_name, last_name, nic, gender, weight, birth_date,height,mnumber) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)";

module.exports={
    checkMailExist,addOwner,
}