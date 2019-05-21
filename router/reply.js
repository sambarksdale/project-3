const express =require('express');
const router = express.Router();
const replyApi = require('../api/replyApi');

router
.route('/reply')
    .post((req,res) => {
        replyApi.newReply(req.body)
            .then(() => {
                replyApi.getRepliesByParentId(req.body.parentId)
                    .then(replies => {
                        res.json(replies)
                    })
                
            })
    })
    .put((req,res) => {
        replyApi.getReplyById(req.body._id)
            .then(reply => {
                replyApi.editReply(reply,req.body)
                    .then(() => {
                        replyApi.getRepliesByParentId(reply.parentId)
                            .then(replies => {
                                res.send(replies)
                            })
                    })
            })
    })

router
.route('/reply/:id')
    .delete((req,res) => {
        replyApi.getReplyById(req.params.id)
            .then(reply => {
                replyApi.deleteReply(req.params.id)
                    .then(() => {
                        replyApi.getRepliesByParentId(reply.parentId)
                            .then(replies => {
                                res.json(replies)
                            })
                    })
            })
    })

    

module.exports = router;