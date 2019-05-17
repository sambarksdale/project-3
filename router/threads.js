const express =require('express');
const router = express.Router();
const threadApi = require('../api/threadApi.js');

router
    .route('/threads')
    .get((req,res) => {
        threadApi.reurnAllThreads()
            .then(threads => {
                res.json(threads)
            })
    })
    .post((req,res) => {
        console.log(req.body)
        threadApi.newThread(req.body)
            .then(() => {
                res.status(200).send("posted")
            })
    })

module.exports = router;





