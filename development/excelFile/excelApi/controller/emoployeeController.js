const express = require('express');
var router = express.Router();
var objectId = require('mongoose').Types.objectId;
var multer = require('multer');
const Employee = require('../models/employee');
const Manager = require('../models/manger');
const XLSX = require('xlsx');

const storage = multer.diskStorage({   
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
var upload = multer({
    storage: storage, limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


router.post('/', upload.single('file'), (req, res, next) => {
    var workbook = XLSX.readFile(req.file.path);// ./assets is where your relative path directory where excel file is, if your excuting js file and excel file in same directory just igore that part
    console.log(workbook);
    var sheet_name_list = workbook.SheetNames; // SheetNames is an ordered list of the sheets in the workbook
    console.log(sheet_name_list);
    data1 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]); //if you have multiple sheets
    console.log(data1);
    data2 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]); //if you have multiple sheets
    console.log(data1);
    res.json({ data1: data1, data2: data2 });

});


router.post('/confirmEmployee', (req, res, next) => {
    console.log("employee", req.body);
    //console.log(req.body[0].length);
    Employee.insertMany(req.body, (error, response) => {
        if (error) {
            console.log(error);
        }
        if (response) {
            console.log(response);
            res.status(200).json({
                employees: response,
               });
        }
    });
});


router.post('/confirmManager', (req, res, next) => {
    console.log("manager", req.body);
    // console.log(req.body.length);
    Manager.insertMany(req.body, (error, response) => {
        if (error) {
            console.log(error);
        }
        if (response) {
            console.log(response);
            res.status(200).json({
                managers: response,

            });

        }
    })


});




module.exports = router;


// for(var i =0 ;i <req.body[0].length ;i++){
//     var emp = new employee({      
//         emp_code:req.body[0][i].emp_code,
//       firstName: req.body[0][i].FirstName,
//       LastName: req.body[0][i].LastName,
//       Email : req.body[0][i].Email,
//       Status: req.body[0][i].Status,
//       Man_code : req.body[0][i].Man_code

//   });
//   console.log(emp);
//   emp.save((err, emp) => {
//       if (!err) { res.send(emp); }
//       else { console.log('error with the Employee Save: ' + JSON.stringify(err, undefined, 2)); }
//   });
//   }