import React, {Component} from 'react'
import './SignInForm.css'

class SignInForm extends Component {
    render(){
        return(
        <div >
            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="user@email.com"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" name="email" placeholder="password" />
                </div>
                <input className="submit-button" type="submit" value="Submit" />
            </form>
        </div> 
        )
    }
}

export default SignInForm