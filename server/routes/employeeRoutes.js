const express = require("express");
const router = express.Router();
const {getEmployees, createEmployee, getEmployee, updateContact, deleteContact} = require('../controllers/employeeController');

router.route("/").get(getEmployees);

router.route("/").post(createEmployee);

router.route("/:id").get(getEmployee);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;
