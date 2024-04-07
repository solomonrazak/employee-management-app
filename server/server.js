const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(express.json())
app.use("/api/employees", require("./routes/employeeRoutes"));

// middleware 
app.use(errorHandler)

app.listen(port, () => console.log(`server running on ${port}`));