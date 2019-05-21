const mongoose = require('../connection.js')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const Reply = new Schema({
    body: String,
    date: Date,
    createdBy: ObjectId,
    userName: String,
    parentId: ObjectId
})


module.exports = mongoose.model('Reply', Reply)