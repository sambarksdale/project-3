const ThreadModel = require('../db/models/threadModel.js')

reurnAllThreads = () => {
    return ThreadModel.find()
}

module.exports = {
    reurnAllThreads
}