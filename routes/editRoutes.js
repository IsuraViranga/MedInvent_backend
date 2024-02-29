const{ Router }=require("express");
const router=Router();
const EditController = require("../controller/editController");

//edit depend  profile details
router.post('/edit/depend/picture/detail/:id',EditController.editDependPicture);
router.post('/edit/depend/Fname/detail/:id',EditController.editDependFname);
router.post('/edit/depend/Lname/detail/:id',EditController.editDependLname);
router.post('/edit/depend/relationship/detail/:id',EditController.editDependRelationship);
router.post('/edit/depend/NIC/detail/:id',EditController.editDependNIC);
router.post('/edit/depend/gender/detail/:id',EditController.editDependGender);
router.post('/edit/depend/DOB/detail/:id',EditController.editDependDOB);

//edit account owner  profile details
router.post('/edit/owner/picture/detail/:id',EditController.editOwnerPicture);
router.post('/edit/owner/Fname/detail/:id',EditController.editOwnerFname);
router.post('/edit/owner/Lname/detail/:id',EditController.editOwnerLname);
router.post('/edit/owner/NIC/detail/:id',EditController.editOwnerNIC);
router.post('/edit/owner/gender/detail/:id',EditController.editOwnerGender);
router.post('/edit/owner/DOB/detail/:id',EditController.editOwnerDOB);
router.post('/edit/owner/addressLOne/detail/:id',EditController.editOwnerAddressOne);
router.post('/edit/owner/addressLtwo/detail/:id',EditController.editOwnerAddressTwo);
router.post('/edit/owner/city/detail/:id',EditController.editOwnerCity);
router.post('/edit/owner/distric/detail/:id',EditController.editOwnerDistric);

module.exports=router;