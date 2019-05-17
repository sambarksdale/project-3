const ThreadModel = require('../db/models/threadModel.js')

reurnAllThreads = () => {
    return ThreadModel.find()
}

newThread = (data) => {
    return ThreadModel.create(data)
}

module.exports = {
    reurnAllThreads,
    newThread
}