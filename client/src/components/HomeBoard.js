import React, {Component} from 'react'
import './HomeBoard.css';
import NewThread from './NewThread'

class HomeBoard extends Component {
    render(){
        return(
            <div className="message-board">
                <div className="message-board-head">
                    <div className="search-container">
                        <input type="text" placeholder="search"/>
                        <input type="button" value="search"/>
                    </div>
                    <button className="new-thread-button" onClick={this.props.show}>+ New Thread</button>
                </div>
                <div>
                    {
                     this.props.newThread ? <NewThread hide={this.props.hide}/> : null 
                    }
                </div>
                {
                    this.props.threads.map((thread,index) => {
                        return(
                            <div key={index} className="thread">  
                                <div>posted by:</div> 
                                <div>{thread.name}</div>
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