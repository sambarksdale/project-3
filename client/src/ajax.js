import axios from 'axios'

export function userSignInDetails(user){
    return axios.post('/login', user )
}

export function createNewUser(user){
    // console.log(user)
    return axios.post('/users', user)
}

export function getThreadsOnMount(){
    return axios.get('/boards')
        .then(threads => threads.data)
}

