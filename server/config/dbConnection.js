const mongoose = require('mongoose');

const connectToDb = async() => {
    try {
const connect = await mongoose.connect(process.env.CONNECTION_STRING);
console.log('db connected', connect.connection.host, connect.connection.name)
    }
    catch(err){
console.log(err)
process.exit(1) // exit if there is an error
    }

}

module.exports = connectToDb;