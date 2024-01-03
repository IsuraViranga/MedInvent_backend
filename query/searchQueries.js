const getDoctorById = "SELECT * FROM registered_user WHERE uid = $1";

module.exports={
    getDoctorById,
}