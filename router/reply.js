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

    

module.exports = router;