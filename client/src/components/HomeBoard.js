import React, {Component} from 'react'
import './HomeBoard.css';

class HomeBoard extends Component {
    render(){
        return(
            <div className="message-board">
            <div className="message-board-head">
                <input type="text" placeholder="search"/>
                <input type="button" value="search"/>
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