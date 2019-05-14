const express = require('express')
const router = express.Router();
const  userApi = require('../api/userApi.js')

router.route('/users').get((req,res) => {
    userApi.returnAllUsers()
        .then(users => {
            res.json(users)
        })   
})

module.exports = router;