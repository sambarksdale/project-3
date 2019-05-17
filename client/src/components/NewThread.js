import React, {Component} from 'react'
import './NewThread.css'

class NewThread extends Component {
    render(){
        return(
            <div >
                <form className="new-thread-container">
                    <div>
                        <label>Title</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Body</label>
                        <textarea rows="10"></textarea>
                    </div>
                    <div className="button-container">
                        <div class="button" onClick={this.props.hide}>cancel</div>
                        <div class="button">post</div>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewThread