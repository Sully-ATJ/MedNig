const express = require('express');
const app = express();
const bodyParser = require('body-parser');


//Middlesware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


//Import Routes
const patients = require('./routes/patients')
const port = 3000;

//set the program to render files on views directory 
//And in ejs format.
app.set('view engine', 'ejs')

//This is to serve static files in Express
//These kind of files include CSS files, images and Javascript files/
app.use(express.static('public'))


//display frontend


app.get('/',(req,res) => res.send('Home page'));//----Home page--->>>

app.use('/patients',patients);//----Patients page--->>>



//Connection to Database
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test',{useNewUrlParser:true});
var conn = mongoose.connection;
//end of connection

//Testing conn
conn.on('connected',function(){
    console.log('connection to database was established successfully');
    app.listen(port, function(){
        console.log(`Node app listening on port ${port}!`);
    });
});
conn.on('disconnected',function(){
    console.log('connection to database was terminated successfully');
});

conn.on('error', console.error.bind(console,'MongoDB connection error:'));