const UserModel = require('../db/models/userModel')

returnAllUsers = () => {
    UserModel.find()
        .then(users => {
            res.jason(users)
        })
}

module.exports = {

}