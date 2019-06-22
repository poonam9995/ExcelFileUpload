const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const manager = new Schema({
    emp_code : String,
    FirstName : String,
    LastName : String,
    Email : String,
    Status : String,
})

module.exports = mongoose.model('manager',manager);




