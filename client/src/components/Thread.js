import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import {getThread,newReply,getRepliesbyParent,editReply,deleteReply} from '../ajax.js'
import './Thread.css'
import NewPostForm from './NewPostForm.js'
import Reply from './Reply.js'

class Thread extends Component {
    
    state = {
        thread: {
            _id: "",
            name: "",
            body: "",
            date: "",
            createdBy: "",
            userName: ""
        },
        showEditForm: false,
        replies: [],
    }
    
    componentDidMount(){
        let id = {_id: this.props.thread.match.params.id}
        getThread(id)
            .then(thread => {
                getRepliesbyParent(this.props.thread.match.params.id)
                    .then(replies => {
                        this.setState({thread: thread, replies: replies},console.log(this.state.replies))
                    })
                
            })
    }

    showEditForm = () => {
        this.setState({showEditForm: true})
    }

    hideEditForm = () => {
        this.setState({showEditForm: false})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let body = document.getElementById("edit-form").value
        let thread = {...this.state.thread}
        thread.body = body
        this.setState({thread: thread,showEditForm: false},)
        this.props.handleEditThread(thread)
    }

    deleteThisThread = () => {
        this.props.handleDeleteThread(this.props.thread.match.params.id)
    }

    handleNewReply = (data) => {
        newReply(data)
            .then(replies => {
                console.log(replies)
                this.setState({replies: replies}, console.log(this.state.replies))
            })
    }

    getReplies = (id) => {
        getRepliesbyParent(this.props.thread.match.params.id)
            .then(replies => {
                this.setState({replies})
            })
    }

    handleEditReply = (data) => {
        editReply(data)
            .then(replies => {
                this.setState({replies})
            })
    }

    handleDeleteReply = (id) => {
        deleteReply(id)
            .then(replies => {
                this.setState({replies})
            })
    }

    render(){

        const Replies = () =>(<Reply
            reply={this.state.replies}
            editReply={this.state.editReply}
            user={this.props.user}
            handleEditReply={this.handleEditReply}
            handleDeleteReply={this.handleDeleteReply}
        />)

        const Post = () =>(<NewPostForm
            user={this.props.user}
            parentId={this.props.thread.match.params.id}
            handleNewReply={this.handleNewReply}
        />)

        return(
            <div>
                <div className="thread-container">
                    <div className="thread-title">
                        <div>{this.state.thread.name}</div>  
                        {
                            this.state.thread.createdBy === this.props.user._id ? <div className="edit-button" onClick={this.showEditForm}>edit</div> : null
                        }    
                    </div> 
                    <div className="thread-body">
                        {
                            this.state.showEditForm ?
                            <form onSubmit={this.handleSubmit}>
                               {
                                   this.props.threads.map((thread,index) => {
                                        if (thread._id === this.props.thread.match.params.id){
                                            return(
                                                <textarea id="edit-form" key={index} rows="10" defaultValue={thread.body}></textarea>
                                            )
                                        }
                                   })
                               }
                               <div className="edit-controll">
                                <div className="edit-button-container">
                                    <div className="edit-button" onClick={this.hideEditForm}>cancel</div>
                                    <input className="edit-button" type="submit" value="save"/>
                                </div>
                                <Link className="delete-button" to={'/'} onClick={this.deleteThisThread}>delete</Link>
                                </div>
                            </form>
                        :
                            <p className="thread-body">{this.state.thread.body}</p>
                        }
                    </div>
                    <div className="thread-footer">
                        <div>{this.state.thread.date}</div>
                    </div>
                </div>

                {/* <Reply reply={this.state.replies} editReply={this.state.editReply} user={this.props.user} handleEditReply={this.handleEditReply} handleDeleteReply={this.handleDeleteReply}/> */}
                <Route render={Replies}/>        
                <div className="new-post-form-container">
                    {/* <NewPostForm user={this.props.user} parentId={this.props.thread.match.params.id} handleNewReply={this.handleNewReply}/> */}
                    {
                        this.props.loggedIn ? <Route render={Post}/> : null
                    }
                </div>
            </div>
        )
    }
}

export default Thread
