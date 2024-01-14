const{ Router } =require("express");
const router = Router();
const searchController = require("../controller/searchcontroller");
const keycloak = require('../services/keyCloak').getKeycloak();

router.get('/doctor/:id',keycloak.protect('user'),searchController.searchDoctor);
//router.get('/pharmacy',searchController.searchPharmacy);
//router.get('/medicine',searchController.searchMedicine);


module.exports=router;