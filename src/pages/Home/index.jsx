import React from 'react'
import './home.css'


import homeImg from '../../assets/img/home/home_img.jpg'
import logo from '../../assets/img/home/logo.svg'

export default function Home() {
  return (
    <section className='home'>
      <img src={homeImg} alt='' />
      <div className='grid'>
      
        <nav className='navhome'>

          <div className='logo'>
            <img src={logo} alt='' />
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

      </div>

    </section>
  )
}
