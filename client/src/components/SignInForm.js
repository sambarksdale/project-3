import React, {Component} from 'react'
import './SignInForm.css'

class SignInForm extends Component {
    state = {
        user: {
        userName: "",
        password: ""
        }
    }

    handleInput = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newUser = { ...this.state.user }
        newUser[attributeName] = attributeValue

        this.setState({ user: newUser }, function(){
        })
    }

    handleUserSignIn = (event) => {
        event.preventDefault();
        this.props.authenticateUser(this.state.user)
    }

    


    render(){
        return(
        <div >
            <form className="signin-form">
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" name="userName" placeholder="User Name" onChange={this.handleInput} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="password" onChange={this.handleInput} />
                </div>
                <div className="user-submit-button" onClick={this.handleUserSignIn}>Submit</div>
            </form>
        </div> 
        )
    }
}

export default SignInForm