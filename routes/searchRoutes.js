const{ Router } =require("express");
const router = Router();
const searchController = require("../controller/searchcontroller");


router.get('/doctor/:id',searchController.searchDoctor);
router.get('/pharmacy',searchController.searchPharmacy);
router.get('/medicine',searchController.searchMedicine);


module.exports=router;