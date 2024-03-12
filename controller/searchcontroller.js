const searchDoctor = require("../usecases/search/searchDoctor");
const searchDoctorByName = require("../usecases/search/SearchDocByName");
const searchSessionsByDocID = require("../usecases/search/SearchSessionsByDocID");

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
      static async searchDoctorsBynames(req, res) {
        try {
          const getbody = req.body;
          const DoctorDetails = await searchDoctorByName.getDoctorNamesAndIDs(getbody);
          res.status(200).json(DoctorDetails);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      static async searchSessionsByDoctorID(req, res) {
        try {
          const userId = req.params.id;
          const SessionDetails = await searchSessionsByDocID.SearchSessionDetailsByDocID(userId);
          res.status(200).json(SessionDetails);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
}   
module.exports=SearchController;