import React, {Component} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render(){
        return(
            <div className="navbar">
                <h1>This Is The NavBar</h1>
            </div>
        )
    }
}

export default Navbar;