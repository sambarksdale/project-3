import React, {Component} from 'react'
import './NewThread.css'

class NewThread extends Component {
    state = {
        thread: {
            name: "",
            body: "",
            date: new Date(),
            createdBy: "",
            userName: ""
        }
    }
    handleInput = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newThread = { ...this.state.thread }
        newThread[attributeName] = attributeValue

        this.setState({ thread: newThread }, function(){
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let newThread = {...this.state.thread}
       
        newThread.createdBy= this.props.user._id
        newThread.userName= this.props.user.userName
        console.log(newThread)
        this.setState({body: newThread.body})

        this.props.handleNewThread(newThread);
    }
    
    render(){
        return(
            <div >
                <form className="new-thread-container" onSubmit={this.handleSubmit} >
                    <p>
                        {this.state.body}
                    </p>
                    <div>
                        <label>Title</label>
                        <input type="text" name="name" onChange={this.handleInput}/>
                    </div>
                    <div>
                        <label>Body</label>
                        <textarea rows="10" name="body" onChange={this.handleInput}></textarea>
                    </div>
                    <div className="button-container">
                        <div className="button" onClick={this.props.hide}>cancel</div>
                        <input className="button" type="submit" value="Post"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewThread