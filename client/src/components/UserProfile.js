import React, {Component} from 'react'

class UserProfile extends Component {

    render(){

        return(
            <div>
                <div className="button"></div>
                <form onSubmit={this.props.handleUserUpdate}>
                    <div>
                        <label>User Name</label>
                        <input type="text" name="userName" defaultValue={this.props.user.userName} onChange={this.props.handleInput}/>
                    </div>
                    <div>
                        <label>First Name</label>
                        <input type="text" name="firstName" defaultValue={this.props.user.firstName} onChange={this.props.handleInput}/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" name="lastName" defaultValue={this.props.user.lastName} onChange={this.props.handleInput}/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" defaultValue={this.props.user.email} onChange={this.props.handleInput}/>
                    </div>
                    <div>
                        <label>User Image</label>
                        <input type="text" name="image" defaultValue={this.props.user.image} onChange={this.props.handleInput}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text" name="password" defaultValue={this.props.user.password} onChange={this.props.handleInput}/>
                    </div>
                    <input type="submit" value="Save Changes"/>
                </form>
            </div>
        )
    }
}

export default UserProfile