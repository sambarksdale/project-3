import axios from 'axios'

export function userSignInDetails(user){
    return axios.post('/login', user )
        .then(user => user.data)
}

export function createNewUser(user){
    return axios.post('/users', user)
        .then(user => user.data)
}

export function getThreads(){
    return axios.get('/threads')
        .then(threads => threads.data)
}

export function createThread(thread){
    console.log(thread)
    return axios.post('/threads', thread)
}

