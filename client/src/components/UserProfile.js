import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './UserProfile.css'

class UserProfile extends Component {

    render(){

        return(
            <div>
                <form onSubmit={this.props.handleUserUpdate}>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" name="userName" defaultValue={this.props.user.userName} onChange={this.props.handleInput}/>
                    </div>
                    <div className="form-group"> 
                        <label>First Name</label>
                        <input type="text" name="firstName" defaultValue={this.props.user.firstName} onChange={this.props.handleInput}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" name="lastName" defaultValue={this.props.user.lastName} onChange={this.props.handleInput}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" name="email" defaultValue={this.props.user.email} onChange={this.props.handleInput}/>
                    </div>
                    <div className="form-group">
                        <label>User Image</label>
                        <input type="text" name="image" defaultValue={this.props.user.image} onChange={this.props.handleInput}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" name="password" defaultValue={this.props.user.password} onChange={this.props.handleInput}/>
                    </div>
                    <div className="profile-controll">
                        <input className="profile-edit-button"type="submit" value="Save"/>
                        <Link to="/" className="profile-delete-button" onClick={this.props.handleDeleteUser}>Delete User</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserProfile