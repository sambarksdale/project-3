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

editThread = (thread,data) => {
    return ThreadModel.updateOne(thread,data)
}

deleteThread = (id) => {
    return ThreadModel.deleteOne({_id: id})
}

module.exports = {
    reurnAllThreads,
    newThread,
    getThreadById,
    editThread,
    deleteThread
}