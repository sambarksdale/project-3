const mongoose = require('../connection.js')
const Schema = mongoose.Schema

const User = new Schema({
    userName: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    image: String
})



module.exports = mongoose.model('User', User)
