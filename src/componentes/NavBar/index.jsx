import React from 'react'
import './navbar.css'

import logo from '../../assets/img/home/logo.svg'

export default function NavBar() {
    return (
        <nav className='navhome'>

            <div className='logo'>
                <a href='/'> <img src={logo} alt='' /></a>
            </div>

            <div>
                <p>Revelamos o âmago dos negócios.</p>
            </div>

            <div>
                <p>PT|EN</p>
            </div>

            <div>
                <p>[Menu]</p>
            </div>

        </nav>
    )
}
