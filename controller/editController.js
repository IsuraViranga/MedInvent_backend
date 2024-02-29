const EditDependPic = require("../usecases/edit/editDependPic");
const EditDependFname = require("../usecases/edit/editDependFname");
const EditDependLname = require("../usecases/edit/editDependLname");
const EditDependRelationship = require("../usecases/edit/editDependRelationship");
const EditDependNIC = require("../usecases/edit/editDependNIC");
const EditDependGender = require("../usecases/edit/editDependGender");
const EditDependDOB = require("../usecases/edit/editDependDOB");


const EditOwnerPic = require("../usecases/edit/editOwnerPic");
const EditOwnerFname = require("../usecases/edit/editOwnerFname");
const EditOwnerLname = require("../usecases/edit/editOwnerLname");
const EditOwnerNIC = require("../usecases/edit/editOwnerNIC");
const EditOwnerGender = require("../usecases/edit/editOwnerGender");
const EditOwnerDOB = require("../usecases/edit/editOwnerDOB");
const EditOwnerAddressOne = require("../usecases/edit/editOwnerAddressOne");
const EditOwnerAddressTwo = require("../usecases/edit/editOwnerAddressTwo");
const EditOwnerCity = require("../usecases/edit/editOwnerCity");
const EditOwnerDistric = require("../usecases/edit/editOwnerDistric");


class EditController {
    static async editDependPicture(req,res) {
        try {
          const body = req.body;
          const userId = req.params.id;
          const editResult = await EditDependPic.editPic(body,userId);
          res.status(200).json(editResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }  
      static async editDependFname(req,res) {
        try {
          const getbody = req.body;
          const editResult = await EditDependFname.editFname(getbody,userId);
          res.status(200).json(editResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      static async editDependLname(req,res) {
        try {
          const getbody = req.body;
          const editResult = await EditDependLname.editLname(getbody,userId);
          res.status(200).json(editResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      static async editDependRelationship(req,res) {
        try {
          const getbody = req.body;
          const editResult = await EditDependRelationship.editRelationship(getbody,userId);
          res.status(200).json(editResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      static async editDependNIC(req,res) {
        try {
          const getbody = req.body;
          const editResult = await EditDependNIC.editNIC(getbody,userId);
          res.status(200).json(editResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      static async editDependGender(req,res) {
        try {
          const getbody = req.body;
          const editResult = await EditDependGender.editGender(getbody,userId);
          res.status(200).json(editResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      static async editDependDOB(req,res) {
        try {
          const getbody = req.body;
          const editResult = await EditDependDOB.editDOB(getbody,userId);
          res.status(200).json(editResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      
      /////////////edit account owner details//////////////
      
      static async editOwnerPicture(req,res) {
        try {
          const body = req.body;
          const userId = req.params.id;
          const editResult = await EditOwnerPic.editPic(body,userId);
          res.status(200).json(editResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }  
      static async editOwnerFname(req,res) {
        try {
          const getbody = req.body;
          const editResult = await EditOwnerFname.editFname(getbody,userId);
          res.status(200).json(editResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      static async editOwnerLname(req,res) {
        try {
          const getbody = req.body;
          const editResult = await EditOwnerLname.editLname(getbody,userId);
          res.status(200).json(editResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      static async editOwnerNIC(req,res) {
        try {
          const getbody = req.body;
          const editResult = await EditOwnerNIC.editNIC(getbody,userId);
          res.status(200).json(editResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      static async editOwnerGender(req,res) {
        try {
          const getbody = req.body;
          const editResult = await EditOwnerGender.editGender(getbody,userId);
          res.status(200).json(editResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      static async editOwnerDOB(req,res) {
        try {
          const getbody = req.body;
          const editResult = await EditOwnerDOB.editDOB(getbody,userId);
          res.status(200).json(editResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      static async editOwnerAddressOne(req,res) {
        try {
          const getbody = req.body;
          const editResult = await EditOwnerAddressOne.editAddressOne(getbody,userId);
          res.status(200).json(editResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      static async editOwnerAddressTwo(req,res) {
        try {
          const getbody = req.body;
          const editResult = await EditOwnerAddressTwo.editAddressTwo(getbody,userId);
          res.status(200).json(editResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      static async editOwnerCity(req,res) {
        try {
          const getbody = req.body;
          const editResult = await EditOwnerCity.editCity(getbody,userId);
          res.status(200).json(editResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      static async editOwnerDistric(req,res) {
        try {
          const getbody = req.body;
          const editResult = await EditOwnerDistric.editDistric(getbody,userId);
          res.status(200).json(editResult);
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
}
module.exports=EditController;