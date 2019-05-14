import axios from 'axios'

export function userSignInDetails(user){
    console.log(user)
    return axios.post('/users', user )
}