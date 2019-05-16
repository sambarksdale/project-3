import React, {Component} from 'react'
import './UserModule.css'
import {Link} from 'react-router-dom'

class UserModule extends Component {
    render(){
        return(
            <div className="user-module-container">
                <div className="user-image">
                    <img src={this.props.user.image} alt="user"/>
                </div>
                <h1>{this.props.user.userName}</h1>
                <div className="toggle-container" >
                    <Link to="/user-profile" className="edit-profile">edit profile</Link>
                    <Link to="/" className="edit-profile" onClick={this.props.handleLogOut}>log out</Link>
                </div>
            </div>
        )
    }
}

export default UserModule