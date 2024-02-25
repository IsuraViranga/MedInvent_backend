const{ Router } =require("express");
const router = Router();
const ViewController = require("../controller/viewController");


// router.get('/profile/owner/:id',ViewController.getOwnerProfile);
// router.get('/profile/depend/:id',ViewController.getDependProfile);
// router.get('/appoinment/up/:id',ViewController.getUpcomeAppoinments);
// router.get('/appoinment/past/:id',ViewController.getPastAppoinments);
// router.get('/prescription/owner/:id',ViewController.getOwnerPrescription);
// router.get('/appoinment/depend/:id',ViewController.getDependPrescription);
router.get('/prescription/Doc/:id',ViewController.getDocPrescriptionDetails);
router.get('/prescription/My/manual/:id',ViewController.getManualMyPrescriptionDetails);
router.get('/user/dependent/details/:id',ViewController.getRelatedDependentsAllDetails);




module.exports=router;


