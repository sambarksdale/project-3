import React, {Component} from 'react'
import './SignInForm.css'
import {userSignInDetails} from '../ajax.js'

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

    handleSubmit = (event) => {
        event.preventDefault();

        const userName = this.state.user.userName
        // const password = this.state.user.password

        userSignInDetails(this.state.user)
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
                    <input type="text" name="password" placeholder="password" onChange={this.handleInput} />
                </div>
                <div className="submit-button" onClick={this.handleSubmit}>Submit</div>
            </form>
        </div> 
        )
    }
}

export default SignInForm