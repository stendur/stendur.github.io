import * as React from 'react'
import { Link } from 'gatsby'
import * as navStyles from '../styles/navbar.module.scss'

const Navbar = () => {
    return (
            <nav>
                    <a><Link to="/">Home</Link></a>
                    <a><Link to="/programming">Programming</Link></a> 
                    <a><Link to="/acting">Acting</Link></a> 
            </nav>
    )
}

export default Navbar