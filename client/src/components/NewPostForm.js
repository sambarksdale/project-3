import React, {Component} from 'react'
import './NewPostForm.css'

class NewPostForm extends Component {
    state = {
        reply: {
            body: "",
            date: new Date()
        }
    }

    newReply = (event) => {
        event.preventDefault()
        let body = document.getElementById("reply-body").value
        let newReply = {...this.state.reply}
        newReply.createdBy = this.props.user._id
        newReply.userName = this.props.user.userName
        newReply.parentId = this.props.parentId
        newReply.body = body
        this.props.handleNewReply(newReply)
        document.getElementById("reply-body").value = ""
    }

    render(){
        return(
            <div className="new-post-container">
                <form onSubmit={this.newReply}>
                    <textarea className="post-textarea" id="reply-body" rows="10" placeholder="reply"></textarea>
                    <div>
                        <input className="submit-button" type="submit" value="submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default NewPostForm;