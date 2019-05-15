import React, {Component} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render(){
        return(
            <div className="navbar">
                <div className="link">
                <Link to="/home">Home</Link>
                </div>
                <div className="link">
                <Link to="/login">Login</Link>
                </div>
            </div>
        )
    }
}

export default Navbar;