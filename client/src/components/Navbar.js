import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
    render(){
        return(
            <div className="navbar">
                <Link to={'/'}><h1>MessageBoard App</h1></Link>
                
            </div>
        )
    }
}

export default Navbar;