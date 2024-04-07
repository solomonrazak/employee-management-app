//@desc get all employees
//@route Get all /api/employees
//get to access to the api

const getEmployees = (req, res) => {
    res.status(200).json({ message: "get all employees" });
  }


//@desc create new employee
//@route POST /api/employees
//get to access to the api  

const createEmployee = (req, res) => {
    console.log("the bpdy is", req.body)
    const {name, email, position, department, startDate} = req.body
    if(!name || email || position || department || startDate){
        res.status(400);
        throw new Error("All fields are required!")
    }
    res.status(201).json({ message: "create employee" });

  }

//@desc get employee
//@route Get  /api/employees/:id
//get to access to the api

const getEmployee = (req, res) => {
    res.status(200).json({ message: `get employee for ${req.params.id}`});
  }

//@desc update employee
//@route PUT /api/employees/:id
//get to access to the api

const updateContact = (req, res) => {
    res.status(200).json({message: `update employee for ${req.params.id}`})
}


//@desc delete employee
//@route DELETE /api/employees/:id
//get to access to the api

const deleteContact = (req,res) => {
    res.status(201).json({message: `delete employee for ${req.params.id}`})
}

 module.exports = {getEmployees, createEmployee, getEmployee, updateContact, deleteContact } 