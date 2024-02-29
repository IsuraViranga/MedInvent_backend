//const searchDoctor = require("../usecases/view/getdependPrescription");
//const searchDoctor = require("../usecases/view/getOwnerPrescription");
//const searchDoctor = require("../usecases/view/getOwnerProfile");
//const searchDoctor = require("../usecases/view/getDependProfile");
//const searchDoctor = require("../usecases/view/getUpAppoinments");
const GetUserDepends = require("../usecases/view/getUsersDependDetails");
const GetDocPrescription =require(".././usecases/view/getDocPrescription");
const GetManualMyPrescription =require(".././usecases/view/getManualAddPrescription");
const GetOwnerProfileDetails =require(".././usecases/view/getOwnerProfileDetails");
const GetDependProfileDetails =require(".././usecases/view/getDependProfileDetails");


class ViewController {
    static async getRelatedDependentsAllDetails(req, res) {
        try {
          const userId = req.params.id;
          const userDetails = await GetUserDepends.getDependsByUserID(userId);
          res.status(200).json(userDetails.rows);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async getDocPrescriptionDetails(req, res) {
        try {
          const userId = req.params.id;
          const prescriptionDocAddDetails = await GetDocPrescription.getDocPrescriptionsByUserID(userId);
          res.status(200).json(prescriptionDocAddDetails.rows);
        } catch (error) {  
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async getManualMyPrescriptionDetails(req, res) {
      try {
        const userId = req.params.id;
        const prescriptionManualAddDetails = await GetManualMyPrescription.getManualMyPrescriptionsByUserID(userId);
        res.status(200).json(prescriptionManualAddDetails.rows);
      } catch (error) {  
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
    static async getOwnerProfile(req, res) {
      try {
        const userId = req.params.id;
        const ownerDetails = await GetOwnerProfileDetails.getOwnerProfileDetailByID(userId);
        res.status(200).json(ownerDetails.rows);
      } catch (error) {  
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
    static async getDependProfile(req, res) {
      try {
        const userId = req.params.id;
        const {dID}=req.body;
        const DependDetails = await GetDependProfileDetails.getDependProfileDetailByID(userId,dID);
        res.status(200).json(DependDetails.rows);
      } catch (error) {  
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
}

module.exports=ViewController;
