const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test',{useNewUrlParser:true});
var conn = mongoose.connection;
const port = 3000;

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

module.exports = conn;