const UserModel= require('./models/userModel.js')
const ThreadModel = require('./models/threadModel.js')

UserModel.deleteMany()
    .then(() => {
        UserModel.create({
            userName: "RoboCop",
            password: "DeadOrAliveYoureComingWithMe",
            email: "robocop@ocp.org",
            firstName: "Alex",
            lastName: "Murphy",
            image: "https://imgur.com/mZ8X2PC.jpg"
        })
        .then(() => {
            UserModel.create({
                userName: "Bender",
                password: "BiteMyShinyMetalAss",
                email: "bender@planetexpress.com",
                firstName: "Bender",
                lastName: "Rodriguez",
                image:"https://imgur.com/pRfUXHn.jpg"  
            })
        })
        
    })

ThreadModel.deleteMany()
    .then(() => {
        ThreadModel.create({
            name: "Is It A Sandwich",
            body: "what really makes something a sandwich",
            date: new Date(),
            createdBy: "5cdd7e41427c48fbc9f2524b",
            userName: "Bender"
        })
    })
    .then(() => {
        ThreadModel.create({
            name: "Is Cereal Soup",
            body: "i dpn't think mik makes soup",
            date: new Date(),
            createdBy: "5cdd7e41427c48fbc9f2524b",
            userName: "Bender"
        })
    })      