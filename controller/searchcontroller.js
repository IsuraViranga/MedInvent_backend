const searchDoctor = require("../usecases/search/searchDoctor");
//const searchDoctor = require("../usecases/search/searchMedicine");
//const searchDoctor = require("../usecases/search/searchPharmacy");

class SearchController {
    static async searchDoctor(req, res) {
        try {
          const userId = req.params.id;
          const userDetails = await searchDoctor.getDoctorById(userId);
          res.status(200).json(userDetails);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      
}
module.exports=SearchController;