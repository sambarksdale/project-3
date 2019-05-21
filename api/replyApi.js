const ReplyModel = require('../db/models/replyModel')

getAllReplies = () => {
    return ReplyModel.find()
}

getReplyById = (id) => {
    return ReplyModel.findById(id)
}

newReply = (data) => {
    return ReplyModel.create(data)
}

getRepliesByParentId = (id) => {
    return ReplyModel.find({parentId: id })
}

editReply = (reply, data) => {
    return ReplyModel.updateOne(reply,data)
}

deleteReply = (id) => {
    return ReplyModel.deleteOne({_id: id})
}

module.exports = {
    newReply,
    getReplyById,
    getRepliesByParentId,
    getAllReplies,
    editReply,
    deleteReply
}