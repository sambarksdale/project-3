const UserModel = require('../db/models/userModel')

returnAllUsers = () => {
   return UserModel.find()
}

returnUserBySignIn = (userName, password) => {
    return UserModel.findOne({userName: userName, password: password})
}

newUser = (userData) => {
    return UserModel.create(userData)
}

findUserBYId = (id) => {
    return UserModel.findById(id)
}

editUser = (user,userData) => {
    return UserModel.updateOne(user,userData)
}

deleteUser = (id) => {
    return UserModel.deleteOne({_id: id})
}


module.exports = {
    returnAllUsers,
    returnUserBySignIn,
    newUser,
    findUserBYId,
    editUser,
    deleteUser
}