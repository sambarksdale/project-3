import React, {Component} from 'react'
import './Reply.css'

class Reply extends Component {
    state= {
        reply: {
            body:""
        },
        editPost: "",
        editReply: false
    }

    showEditPost =(id) => {
        console.log(id)
        this.setState({editPost: id},function(){console.log(this.state.editPost)})
    }

    hideEditPost = () => {
        this.setState({editPost: ""})
    }

    handleSubmit = () => {
        let body = document.getElementById("body").value
        let updateReply = {...this.state.reply}
        updateReply.body = body
        updateReply._id = this.state.editPost
        console.log(updateReply)
        this.props.handleEditReply(updateReply)
        this.setState({editPost: ""})
    }

    render(){
        return(
            <div>
            {
                this.props.reply.map((reply,index) => {    
                    return(
                        <div key={index} className="reply-container">
                            <div className="reply-head">
                                <div className="posted-by">posted by: {reply.userName}</div>
                                {
                                    
                                    reply.createdBy === this.props.user._id ? <div className="edit-button"onClick={() => {this.showEditPost(reply._id)}}>edit</div> : null
                                }
                            </div> 
                            <div className="reply-body"> 
                                {
                                    this.state.editPost === reply._id ? 

                                    <form>
                                    <textarea id="body"rows="10" defaultValue={reply.body}></textarea>
                                    <div className="edit-controll">
                                        <div className="edit-button-container">
                                            <div className="edit-button" onClick={this.hideEditPost}>Cancel</div>
                                            <div className="edit-button" onClick={this.handleSubmit}>Save</div>
                                        </div>
                                        <div className="delete-button" onClick={() => {this.props.handleDeleteReply(reply._id)}}>Delete</div>
                                    </div>
                                    </form> 
                                    : <p>{reply.body}</p>
                                }
                            </div> 
                            <div className="reply-footer"> 
                                <div>last edited: {reply.date}</div>
                            </div>
                        </div> 
                         
                    ) 
                })
            }
            </div>
        )
    }
}

export default Reply