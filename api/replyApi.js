const ReplyModel = require('../db/models/replyModel')

getAllReplies = () => {
    return ReplyModel.find()
}

newReply = (data) => {
    return ReplyModel.create(data)
}

getRepliesByParentId = (id) => {
    return ReplyModel.find({parentId: id })
}

module.exports = {
    newReply,
    getRepliesByParentId
}