const{ Router } =require("express");
const router = Router();
const searchController = require("../controller/searchcontroller");
//const keycloak = require('../services/keyCloak').getKeycloak();

//search by doc name
router.get('/doctor/get/names/and/id/typing/name',searchController.searchDoctorsBynames);
router.get('/doctor/all/details/:id',searchController.searchDoctor);
router.get('/doctor/all/upcome/Session/details/:id',searchController.searchSessionsByDoctorID);

//advanced search
router.get('/clinic/names',searchController.getAllClinicNames);
router.get('/doctor/names',searchController.getAllDoctorNames);
router.get('/doctor/specializations',searchController.getAllDoctorSpecializations);
router.get('/sessions/details',searchController.getResultSessionDetails);

//router.get('/pharmacy',searchController.searchPharmacy);
//router.get('/medicine',searchController.searchMedicine);


module.exports=router;
