import React, {Component} from 'react'
import './Login.css';
import SignInForm from './SignInForm.js'

class Login extends Component {
    state = {
        showSignIn: true
    }

    toggleSignIn = () => {
        this.setState({showSignIn: true})
    }

    toggleCreateAccount = () => {
        this.setState({showSignIn: false})
    }


    render(){
        return(
            <div className="login-container">
                <div className="toggle-container">
                    <div className="login-button" onClick={this.toggleSignIn}>Sign In</div>
                    <div className="login-button" onClick={this.toggleCreateAccount}>Create New Account</div>
                </div>
                <div className="form-container">
                {
                  this.state.showSignIn ? 
                    <SignInForm />
                  :
                  <h1>New Account</h1> 
                }
                </div>
            </div>
        )
    }
}

export default Login;