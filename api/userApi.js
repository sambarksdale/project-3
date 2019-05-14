const UserModel = require('../db/models/userModel')

returnAllUsers = () => {
   return UserModel.find()
}

returnUserBySignIn = (userName, password) => {
    return UserModel.findOne({userName: userName, password: password})
}


module.exports = {
    returnAllUsers,
    returnUserBySignIn
}