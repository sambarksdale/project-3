import React, {Component} from 'react'
import {getThread} from '../ajax.js'

class Thread extends Component {
    
    state = {
        thread: {
            _id: "",
            name: "",
            body: "",
            date: "",
            createdBy: "",
            userName: ""
        }
    }
    
    componentDidMount(){
        // console.log(this.props.props)
        // console.log(this.props.props.match.params.id)
        let id = {_id: this.props.thread.match.params.id}
        getThread(id)
          .then(thread => {
            console.log(thread.body)    
            this.setState({thread: thread},function(){console.log(this.state.thread)})
          })
      }

    render(){
        return(
            <div>
            <h1>{this.state.thread.name}</h1>
            <h1>{this.props.user.userName}</h1>
            </div>
        )
    }
}

export default Thread
