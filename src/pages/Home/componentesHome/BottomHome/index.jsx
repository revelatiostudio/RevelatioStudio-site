import React from 'react'
import './bottomhome.css'

import revelatio from '../../../../assets/img/home/revelatio-bottom.png'
import { Link } from 'react-router-dom'

export default function BottomHome() {


    return (
        <div className='container_bottom'>
            <div className='grid-global'>
                <div className='hero_bottom'>
                    <div className='left_bottom'>
                        <p><span>[Escritório]</span></p>
                        <div className='adress'>
                            <p>Praça Miguel de Cervantes, 60.</p>
                            <p>Sala 1103</p>
                            <p>Recife,Brasil</p>

                        </div>

                        <p className='revelatio'>Revelatio © 2024 All rights reserved</p>


                    </div>

                    <div className='right_bottom'>
                        <div className='container_links'>
                            <p><span>[Links]</span></p>
                            <div className='links'>
                                <Link to='/'><p>Home</p></Link>
                                <Link to='/about'><p>Sobre</p></Link>
                                <Link to='/cases'><p>Cases</p></Link>
                                <Link to='/contato'><p>Contato</p></Link>
                                <p>Galeria</p>
                            </div>

                        </div>
                        <div className='social'>
                            <p><span>[Redes Sociais]</span></p>
                            <div className='links'>
                                <p><a href='https://www.instagram.com/revelatio.studio/' target='blank'>Instagram</a></p>
                                <p><a href='https://www.linkedin.com/company/revelatio-studio/posts/?feedView=all' target='blank'>Linkedin</a></p>
                                <p>Behance</p>
                                <p>Awwwards</p>
                            </div>

                        </div>

                    </div>


                </div>
                <div className='reve-mobile'>
                    <p>Revelatio © 2024 All rights reserved</p>
                </div>
                <div className='final'>
                    <img src={revelatio} alt='' />

                </div>


            </div>

        </div>
    )
}
