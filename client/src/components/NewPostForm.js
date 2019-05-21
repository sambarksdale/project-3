import React, {Component} from 'react'

class NewPostForm extends Component {
    render(){
        return(
            <div>
                {
                    this.props.value
                }
            </div>
        )
    }
}

export default NewPostForm;