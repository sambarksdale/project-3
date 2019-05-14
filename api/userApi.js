const UserModel = require('../db/models/userModel')

returnAllUsers = () => {
   return UserModel.find()
}


module.exports = {
    returnAllUsers,
}