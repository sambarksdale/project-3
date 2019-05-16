const express =require('express');
const router = express.Router();
const threadApi = require('../api/threadApi.js');

router
    .route('/boards')
    .get((req,res) => {
        threadApi.reurnAllThreads()
            .then(threads => {
                res.json(threads)
            })
    })

module.exports = router;