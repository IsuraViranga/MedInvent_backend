const AuthWithEmailCredentials = require("../usecases/authenticate/authWithUserEmail");
const AuthWithMobileCredentials = require("../usecases/authenticate/authWithUserMobile");

class AuthenticateController {
    static async authWithEmail(req,res) {
        try {
          const getbody = req.body;
          const addResult = await AuthWithEmailCredentials.authWithEmailPassword(getbody);
         // res.status(200).json(addResult);
          //const { access_token, refresh_token, expires_in } = JSON.parse(addResult);
          console.log("done");
          res.status(200).json(addResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
    static async authWithMobile(req,res) {
        try {
          const getbody = req.body;
          const addResult = await AuthWithMobileCredentials.authWithMobilePassword(getbody);
          res.status(200).json(addResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
module.exports=AuthenticateController;