const UserModel = require('./models/userModel')

UserModel.deleteMany()
    .then(() => {
        const robocop = {
            userName: "RoboCop",
            password: "DeadOrAliveYoureComingWithMe",
            email: "robocop@ocp.org",
            firstName: "Alex",
            lastName: "Murphy"
        }
        return robocop.save()
    })