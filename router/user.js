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
    .put((req,res) => {
        let id = req.body._id
        userApi.findUserBYId(id)
            .then(user => {
                userApi.editUser(user,req.body)
                    .then(() => {
                        userApi.findUserBYId(id)
                            .then(updatedUser => {
                                res.json(updatedUser)
                            })
                    })
            })
    })

router.route('/users/delete/:id').delete((req,res) => {
    // console.log("user delete Route")
    // console.log(req.params.id)
    userApi.deleteUser(req.params.id)
        .then(() => {
            res.status(202).send("deleted")
        })
})




module.exports = router;