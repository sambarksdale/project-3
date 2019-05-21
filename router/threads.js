const express =require('express');
const router = express.Router();
const threadApi = require('../api/threadApi.js');
const replyApi = require('../api/replyApi');

router
    .route('/threads')
    .get((req,res) => {
        threadApi.reurnAllThreads()
            .then(threads => {
                res.json(threads)
            })
    })
    .post((req,res) => {
        // console.log(req.body)
        threadApi.newThread(req.body)
            .then(() => {
                res.status(201).send("posted")
            })
    })
    .put((req,res) => {
        let id = req.body._id
        threadApi.getThreadById(id)
            .then(thread => {
                threadApi.editThread(thread,req.body)
                    .then(() => {
                        res.status(200).send("updated")
                    })
            })
    })

router
    .route('/thread/:id')
    .post((req,res) => {
        threadApi.getThreadById(req.body._id)
            .then(thread => {
                res.json(thread)
            })
    })
    .delete((req,res) => {
        threadApi.deleteThread(req.params.id)
            .then(() => {
                threadApi.reurnAllThreads()
                    .then(threads => {
                        res.json(threads)
                    })
            })

    })
    .get((req,res) => {
        replyApi.getRepliesByParentId(req.params.id)
            .then(replies => {
                res.json(replies)
            })
    })

module.exports = router;





