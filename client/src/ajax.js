import axios from 'axios'

export function userSignInDetails(user){
    return axios.post('/login', user )
        .then(user => user.data)
}

export function createNewUser(user){
    return axios.post('/users', user)
        .then(user => user.data)
}

export function getThreadsOnMount(){
    return axios.get('/boards')
        .then(threads => threads.data)
}

