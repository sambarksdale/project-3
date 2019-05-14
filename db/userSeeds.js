const User= require('./models/userModel.js')

User.deleteMany()
    .then(() => {
        User.create({
            userName: "RoboCop",
            password: "DeadOrAliveYoureComingWithMe",
            email: "robocop@ocp.org",
            firstName: "Alex",
            lastName: "Murphy"
        })
        .then(() => {
            User.create({
                userName: "Bender",
                password: "BiteMyShinyMetalAss",
                email: "bender@planetexpress.com",
                firstName: "Bender",
                lastName: "Rodriguez" 
            })
        })
        
    })