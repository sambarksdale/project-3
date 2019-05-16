const express = require('express');
const router = express.Router();
const userApi = require('../api/userApi.js')

router
.route('/users')
    .get((req,res) => {
        userApi.returnAllUsers()
            .then(users => {
                res.json(users)
            })
    })
    .post((req,res) => {
        const userName = req.body.userName
        const password = req.body.password

        userApi.newUser(req.body)
            .then(() => {
                userApi.returnUserBySignIn(userName,password)
                    .then(user => {
                        res.json(user)
            })
        })
    })

module.exports = router;