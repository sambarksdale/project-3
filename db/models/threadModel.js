const mongoose = require('../connection.js')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const Thread = new Schema({
    name: String,
    date: String,
    createdBy: ObjectId,
})


module.exports = mongoose.model('Thread', Thread)