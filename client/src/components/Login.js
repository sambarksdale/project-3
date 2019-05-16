import React, {Component} from 'react'
import './Login.css';
import NewAccountForm from './NewAccountForm.js'
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
                  <NewAccountForm/>
                }
                </div>
            </div>
        )
    }
}

export default Login;