const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db.js'); 
const cors = require('cors');
const routes=require('./controller/emoployeeController.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/uploads",express.static('uploads'));

app.use(cors({origin:'http://localhost:4200'}));
app.use('/excelFile',routes);

app.listen(process.env.port|| 4000 ,function(){
    console.log('now listeing for request');
    });