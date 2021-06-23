const express = require('express');
const router = express.Router();
const Patient = require('../models/patient-model');

//Search for a patient

router.get('/', async (req,res) =>{
    try{
        const id = req.param('pId');
        const patient = await Patient.findById(id);
        //res.json(patient);
        res.render('search', {patient});
    }
    catch(err){
        res.json({
            message: err
        });
    }
    
});

router.get('/:pId', async (req, res) =>{
    try{
        const patient = await Patient.findById(req.params.pId);
        //res.json(patient);
        res.render('search', {patient});
    }
    catch(err){
        res.json({
            message: err
        });
    }
});

router.post('/certificate'), async (req, res) =>{
    try{
        const pod = req.body.placeofdeath;
        const cod = req.body.causeofdeath;
        const dod = req.body.dateofdeath;

        res.send({pod,cod,dod});
    }
    catch(err){
        res.json({
            message: err
        });
    }
}

module.exports = router;