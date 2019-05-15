import axios from 'axios'

export function userSignInDetails(user){
    return axios.post('/login', user )
}

export function createNewUser(user){
    // console.log(user)
    return axios.post('/users', user)
}