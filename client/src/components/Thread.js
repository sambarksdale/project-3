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
        let id = {_id: this.props.match.params.id}
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
            </div>
        )
    }
}

export default Thread
