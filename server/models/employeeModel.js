const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, "please add name!"]

    },
    email: {
        type: String,
        required: [true, "please add email!"]

    },
    position: {
        type: String,
        required: [true, "please enter a position!"]

    },
    department: {
        type: String,
        required: [true, "please choose a department!"]

    },
    startDate: {
        type: Date,
        required: [true, "please select a date!"]

    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Employee", employeeSchema)