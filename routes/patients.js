const express = require('express');
const router = express.Router();
const Patient = require('../controllers/patient-controller.js');

//Get all patients
router.get('/',Patient.listAll);

//Get a single patient by id
router.get('/search/:id', Patient.listOne);


//Create a patient
router.get('/create', Patient.create);

//Save patient
router.post('/save', Patient.save);

//Edit Patient
router.get('/edit/:id', Patient.edit);

//Delete Patient
router.post('/delete/:id', Patient.delete);

//Generate Certificate
router.post('/certificate/:id', Patient.certificate);

module.exports = router;