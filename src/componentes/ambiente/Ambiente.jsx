import React from 'react'
import './ambiente.css'

import logo from '../../assets/img/home/logo.svg'

export default function Ambiente() {
  return (
    <section className='container_ambiente'>
        <div className='grid'>
            <div className='head'>
              <h1>Nosso Ambiente</h1>
              <img src={logo} alt='Logo Revelatio' />

            </div>
        </div>
      
    </section>
  )
}
