import axios from 'axios'

export function userSignInDetails(user){
    return axios.post('/login', user )
        .then(user => user.data)
}

export function createNewUser(user){
    return axios.post('/users', user)
        .then(user => user.data)
}

export function editUser(userData){
    return axios.put('/users', userData)
        .then(updatedUser => updatedUser.data)
}

export function deleteUser(id){
    console.log("ajax user delete")
    return axios.delete(`/users/delete/${id}`)
}

export function getThreads(){
    return axios.get('/threads')
        .then(threads => threads.data)
}

export function createThread(thread){
    return axios.post('/threads', thread)
}

export function getThread(id){
    return axios.post('/thread/:id',id)
        .then(thread => thread.data)
}

export function editThread(threadData){
    console.log(threadData)
    return axios.put('/threads',threadData)
}

export function deleteThread(id){
    return axios.delete(`/thread/${id}`)
        .then(threads => threads.data)
}

export function newReply(data){
    return axios.post('/reply',data)
        .then(replies => replies.data)
}

export function getRepliesbyParent(id){
    return axios.get(`/thread/${id}`)
        .then(replies => replies.data)
}

export function editReply(data){
    return axios.put('/reply',data)
        .then(replies => replies.data)
}

export function deleteReply(id){
    return axios.delete(`/reply/${id}`)
        .then(replies => replies.data)
}

