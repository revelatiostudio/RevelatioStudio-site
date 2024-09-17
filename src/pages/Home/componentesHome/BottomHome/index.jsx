import React from 'react'
import './bottomhome.css'

import prop from '../../../../assets/img/home/prop.png'
import revelatio from '../../../../assets/img/home/name_revelatio.svg'
import { Link } from 'react-router-dom'

export default function BottomHome() {
    return (
        <div className='container_bottom'>
            <div className='grid-global'>
                <div className='hero_bottom'>
                    <div className='left_bottom'>
                        <p><span>[Escritório]</span></p>
                        <div className='adress'>
                            <p>Estrada Encanamento,846.</p>
                            <p>Room306</p>
                            <p>Recife,Brasil</p>

                        </div>
                        <img src={prop} alt='cartão' />


                    </div>

                    <div className='right_bottom'>
                        <div className='container_links'>
                            <p><span>[Links]</span></p>
                            <div className='links'>
                                <p>Home</p>
                                <Link to='/about'><p>Sobre</p></Link>
                                <p>Cases</p>
                                <p>Contato</p>
                                <p>Galeria</p>
                            </div>
                            <p className='revelatio'>Revelatio © 2024 All rights reserved</p>

                        </div>
                        <div className='social'>
                            <p><span>[Redes Sociais]</span></p>
                            <div className='links'>
                                <p>Instagram</p>
                                <p>Linkedin</p>
                                <p>Behance</p>
                                <p>Awwwards</p>
                            </div>

                        </div>

                    </div>


                </div>
                <div className='final'>
                    <img src={revelatio} alt='' />


                </div>


            </div>

        </div>
    )
}
