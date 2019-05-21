import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {getThread,newReply,getRepliesbyParent} from '../ajax.js'
import './Thread.css'
import NewPostForm from './NewPostForm.js'

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
        replies: []
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





    render(){
        return(
            <div>
                <div className="thread-container">
                    <div className="thread-title-container">
                        <div>{this.state.thread.name}</div>  
                        {
                            this.state.thread.createdBy === this.props.user._id ? <button onClick={this.showEditForm}>edit</button> : null
                        }    
                    </div> 
                    <div className="thread-body-container">
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
                               <div>
                                <button onClick={this.hideEditForm}>cancel</button>
                                <input type="submit" value="save changes"/>
                               </div>
                            </form>
                        :
                            <p className="thread-body">{this.state.thread.body}</p>
                        }
                    </div>
                    <div className="thread-date-container">
                        <div>{this.state.thread.date}</div>
                        {
                            this.state.thread.createdBy === this.props.user._id ? <Link to={'/'} onClick={this.deleteThisThread}>delete</Link> : null
                        }    
                    </div>
                </div>
                <div>
                {
                    this.state.replies.map((reply,index) => {
                        return(
                            <div key={index} className="thread">  
                                <div>posted by: {reply.userName}</div>
                                <div>{reply.body}</div>
                                <div>{reply.date}</div>
                            </div> 
                             
                        ) 
                    })
                }
                </div>
                <div className="new-post-form-container">
                    <NewPostForm user={this.props.user} parentId={this.props.thread.match.params.id} handleNewReply={this.handleNewReply}/>
                </div>
            </div>
        )
    }
}

export default Thread
