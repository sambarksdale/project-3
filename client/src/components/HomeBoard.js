import React, {Component} from 'react'

class HomeBoard extends Component {
    render(){
        return(
            <div>
                {
                    this.props.threads.map((thread,index) => {
                        return(
                        <div key={index} className="thread"> 
                            {thread.name}                            
                        </div>  
                        ) 
                    })
                }
            </div>
        )
    }
}

export default HomeBoard;