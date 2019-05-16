import React, {Component} from 'react'



class UserProfile extends Component {
    
    passThroug = (event) => {
        event.preventDefault();
        let x = "passed through"
        this.props.handleUserUpdate(x)
    }

    render(){

        return(
            <form onSubmit={this.passThroug}>
                <div>
                    <label>User Name</label>
                    <input type="text" defaultValue={this.props.user.userName}/>
                </div>
                <div>
                    <label>First Name</label>
                    <input type="text" defaultValue={this.props.user.firstName}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" defaultValue={this.props.user.lastName}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" defaultValue={this.props.user.email}/>
                </div>
                <div>
                    <label>User Image</label>
                    <input type="text" defaultValue={this.props.user.image}/>
                </div>
                <input type="submit" value="Save Changes"/>
                <h1>{this.props.user._id}</h1>
            </form>
        )
    }
}

export default UserProfile