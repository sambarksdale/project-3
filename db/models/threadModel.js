const mongoose = require('../connection.js')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const Thread = new Schema({
    name: String,
    body: String,
    date: Date,
    createdBy: ObjectId,
    userName: String
})


module.exports = mongoose.model('Thread', Thread)