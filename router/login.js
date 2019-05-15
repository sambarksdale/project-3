const express =require('express');
const router = express.Router();
const userApi = require('../api/userApi.js');

router
    .route('/login')
    .post((req,res) => {
        const userName = req.body.userName
        const password = req.body.password

        userApi.returnUserBySignIn(userName,password)
            .then(user => {
                console.log(user)
            })
    })

module.exports = router;