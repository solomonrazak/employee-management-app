const asyncHandler = require('express-async-handler');
const Employee = require('../models/employeeModel')
//utilizing asyncHandler to handle errors

//@desc get all employees
//@route Get all /api/employees
//get to access to the api

const getEmployees = asyncHandler(async (req, res) => {
    const employees = await Employee.find();
    res.status(200).json(employees);
  });


//@desc create new employee
//@route POST /api/employees
//get to access to the api  

const createEmployee = asyncHandler(async (req, res) => {
    console.log("the bpdy is", req.body)
    const {name, email, position, department, startDate} = req.body
    if(!name || !email || !position || !department || !startDate){
        res.status(400);
        throw new Error("All fields are required!")
    }

    const employee = await Employee.create({
        name, email, position, department, startDate
    })
    res.status(201).json(employee);

  });

//@desc get employee
//@route Get  /api/employees/:id
//get to access to the api

const getEmployee = asyncHandler(async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    if(!employee) {
        res.status(404);
        throw new Error("Employee not found")
    }
    res.status(200).json(employee);
  });

//@desc update employee
//@route PUT /api/employees/:id
//get to access to the api

const updateEmployee = asyncHandler(async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    if(!employee) {
        res.status(404);
        throw new Error("Employee not found")
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(
        req.params.id,
        req.body, 
        {new : true}
    )
    res.status(200).json(updatedEmployee)
});


//@desc delete employee
//@route DELETE /api/employees/:id
//get to access to the api

const deleteEmployee = asyncHandler(async (req,res) => {
    const employee = await Employee.findById(req.params.id);
    if(!employee) {
        res.status(404);
        throw new Error("Employee not found")
    }
    await Employee.remove();
    res.status(201).json(employee)
});

 module.exports = {getEmployees, createEmployee, getEmployee, updateEmployee, deleteEmployee } 