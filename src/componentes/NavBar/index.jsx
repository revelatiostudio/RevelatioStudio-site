import React from 'react'
import './navbar.css'

import logo_white from '../../assets/img/home/logo.svg'
import logo_black from '../../assets/img/home/logo_black.svg'

export default function NavBar({color}) {
    console.log(color)
    return (
        <nav className={`navbar ${color}`}>

            <div className='logo'>
                {color == 'white' ?
                <a href='/'> <img src={logo_white} alt='' /></a> 
                :
                <a href='/'> <img src={logo_black} alt='' /></a>

                
            }
                
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
