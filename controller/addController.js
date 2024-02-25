const AddOwnerProfile = require("../usecases/add/addOwnerProfile");
const AddPresByUser = require("../usecases/add/addPrescriptionByUser");
//const searchDoctor = require("../usecases/search/searchMedicine");
//const searchDoctor = require("../usecases/search/searchPharmacy");

class AddController {
    static async addOwnerProfile(req,res) {
        try {
          const getbody = req.body;
          const addResult = await AddOwnerProfile.addNewOwner(getbody);
          res.status(200).json(addResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      static async addPrescriptionManual(req,res) {
        try {
          const getbody = req.body;
          const addResult = await AddPresByUser.addNewPrescription(getbody);
          res.status(200).json(addResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
}
module.exports=AddController;