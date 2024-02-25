const{ Router }=require("express");
const router=Router();
const AddController = require("../controller/addController");

//add new profiles
router.post('/profile/owner',AddController.addOwnerProfile);
//router.post('/profile/depend',AddController.addDependentProfile);

//add new prescription related data
//router.post('/prescription/medicine',AddController.addMedicine);
//router.post('/prescription/ordDetail',AddController.addOrderDetail);
router.post('/prescription/Manual',AddController.addPrescriptionManual);

//add new appoinment related data
//router.post('/appoinment/owner',AddController.addOwnerAppoinment);
//router.post('/appoinment/depend',AddController.addDependAppoinment);
//router.post('/appoinment',AddController.addAppoinment);

module.exports=router;