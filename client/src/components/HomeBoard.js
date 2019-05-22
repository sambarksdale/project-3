import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './HomeBoard.css';
import NewThread from './NewThread'

class HomeBoard extends Component {
    render(){
        return(
            <div className="message-board">
                <div className="message-board-head">
                    <div className="search-container">
                        {/* <input type="text" placeholder="search"/>
                        <input type="button" value="search"/> */}
                    </div>
                    { this.props.loggedIn ?
                    <button className="new-thread-button" onClick={this.props.show}>+ New Thread</button>
                    :
                    null
                    }
                </div>
                <div>
                    {
                     this.props.newThread ? <NewThread hide={this.props.hide} user={this.props.user} handleNewThread={this.props.handleNewThread}/> : null 
                    }
                </div>
                {
                    this.props.threads.map((thread,index) => {
                        return(
                            <div key={index} className="thread">  
                                <div>posted by: {thread.userName}</div>
                                <Link to={`/${thread._id}`}>{thread.name}</Link>
                                <div>{thread.date}</div>
                            </div> 
                             
                        ) 
                    })
                }
            </div>
        )
    }
}

export default HomeBoard;