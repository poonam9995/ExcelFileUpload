
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empSchema = new Schema({
    emp_code : String,
    FirstName : String,
    LastName : String,
    Email : String, 
    Status: String,
    Man_code : String,
})

module.exports = mongoose.model('Employee',empSchema);











// const mongoose = require('mongoose');
// var employee = mongoose.model('employee',{
//     emp_code : String,
//     FirstName : String,
//     LastName : String,
//     Email : String,
//     Status: String,
//     Man_code : String,
// });

// module.exports= modlel;     
