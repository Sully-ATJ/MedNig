var mongoose = require('mongoose');

//create Patient Schema
const Schema = mongoose.Schema
const PatientSchema = new Schema({
    Name:{type:String, trim:true},
    Surname:{type:String, trim:true},
    Age:{type:Number},
    Gender:{type:String, trim:true},
    DateOfBirth:{type:String},
    StateOfBirth:{type:String, trim:true},
    DateOfAdmissionToSystem:{type:Date,default:Date.now()}, //Date Of Admission To System
    PhoneNo:{type:String, trim:true},
    EmergencyContacts:[{
        FullName:{type:String},
        PhoneNo:{type:String},
        Relationship:{type:String}
    }]
});

module.exports = mongoose.model('Patient', PatientSchema);

