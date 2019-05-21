const express =require('express');
const router = express.Router();
const replyApi = require('../api/replyApi');

router
.route('/reply')
    .post((req,res) => {
        console.log(req.body)
        // replyApi.newReply(req.body)
})

    

module.exports = router;