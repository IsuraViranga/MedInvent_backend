const{ Router }=require("express");
const router=Router();
const AuthenticateController = require("../controller/authenticateController");

//validate user login by email & password
router.post('/email',AuthenticateController.authWithEmail);

//validate user login by mobile number & password
router.post('/mobile',AuthenticateController.authWithMobile);

module.exports=router;