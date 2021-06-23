var mongoose = require("mongoose");
var Patient = require("../models/patient-model");
var patientController = {};

patientController.listAll = async (req,res) => {
    try{
        const patientData = await Patient.find({});
        res.render('patient-table', {patientData});
    }
    catch(err){
        res.json({
            message: err
        });
    }
};

patientController.listOne = async (req,res) =>{
    try{
        const patient = await Patient.findById({_id:req.params.id});
        res.render('search', {patient});
    }
    catch(err){
        res.json({
            message: err
        });
    }
};

patientController.create = async (req,res) => {
    res.render("create");
};

patientController.save = async(req,res) => {
    var patient = new Patient(req.body);

    patient.save(function(err){
        if (err) {
            console.log(err);
            res.render("create");
        }
        else{
            console.log("Successfully added patient to Database");
            res.redirect("search/"+patient._id);
        }
    });
};

patientController.edit = async (req,res) => {
    try{
        const patient = await Patient.findById(req.params.id);
        res.render('edit', {patient});
    }
    catch(err){
        res.json({
            message: err
        });
    }
};

patientController.delete = async(req,res) => {
    try{
      const removedPatient = await Patient.remove({_id:req.params.id });
      res.redirect('patients');
      //res.json(removedPatient); 
    } 
    catch (err){
        res.json({ message:err });
    }
}

patientController.certificate = async(req,res) => {
    try{
        const patient = await Patient.findById({_id:req.params.id});
        pod = req.body.placeofdeath;
        cod = req.body.causeofdeath;
        dod  = req.body.dateofdeath;
        res.render('certificate', {patient, 'pod':pod, 'cod':cod, 'dod':dod});
    }
    catch(err){
        res.json({ message:err });
    }
}

module.exports = patientController;