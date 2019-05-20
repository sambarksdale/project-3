const ThreadModel = require('../db/models/threadModel.js')

reurnAllThreads = () => {
    return ThreadModel.find()
}

newThread = (data) => {
    return ThreadModel.create(data)
}

getThreadById = (id) => {
    return ThreadModel.findById(id)
}

module.exports = {
    reurnAllThreads,
    newThread,
    getThreadById
}