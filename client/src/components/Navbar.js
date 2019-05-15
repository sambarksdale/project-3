import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render(){
        return(
            <div>
                <div>
                <Link to="/home">Home</Link>
                </div>
                <div>
                <Link to="/login">Login</Link>
                </div>
            </div>
        )
    }
}

export default Navbar;