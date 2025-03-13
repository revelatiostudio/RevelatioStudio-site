import React from 'react'
import './destaques.css'

import seta from '../../../../assets/img/arrow-secs.svg'
import { gsap } from "gsap";

import castro from '../../../../assets/img/about/reconhecimentos/castro.png'
import approach from '../../../../assets/img/about/reconhecimentos/approach.png'
import ctm from '../../../../assets/img/about/reconhecimentos/ctm.png'
import immersy from '../../../../assets/img/about/reconhecimentos/immersy.png'
import kaicara from '../../../../assets/img/about/reconhecimentos/kaicara.png'
import life from '../../../../assets/img/about/reconhecimentos/life.png'
import prop from '../../../../assets/img/about/reconhecimentos/prop.png'
import smile from '../../../../assets/img/about/reconhecimentos/smile.png'
import marasol from '../../../../assets/img/about/reconhecimentos/marasol.png'
import dca from '../../../../assets/img/about/reconhecimentos/dca.png'
import { Link } from 'react-router-dom';












export default function Destaques() {
    function trocaImagem(event) {
        const img = event.currentTarget.querySelector('img')
        gsap.to(img,

            {
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            }
        )

    }
    function saiImagem(event) {
        const img = event.currentTarget.querySelector('img')
        gsap.to(img,

            {
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            }
        )

    }


    return (
        <section className='container-destaques'>
            <div className='grid-global'>
                <div className='destaques-text'>
                    <h1>Destaques<span className='hide-on-mobile'><br /></span>
                        & Reconhecimentos
                    </h1>
                    <h2>Seja o próximo a se juntar à nossa <span className='hide-on-mobile'><br /></span>
                        galeria de projetos premiados!</h2>

                    <div className='contact'>
                        <Link to='/contato'><p>Entrar em contato</p></Link>
                        <span><a><img src={seta} alt='' /></a></span>
                    </div>

                </div>

                <div className='container-category-first'>
                    <div className='category'>
                        <h3>Project</h3>
                        <h3></h3>
                        <h3>Award</h3>
                        <h3>Mention</h3>
                        <h3>Category</h3>
                        <h3>Year</h3>
                    </div>

                    <div className='projects'>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>castro & hinrichsen</p>
                            <img src={castro} alt='' />
                            <p></p>
                            <p>WBDS</p>
                            <p>Listado</p>
                            <p>Branding</p>
                            <p>2024</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem} >
                            <p>marasol pousada</p>
                            <img src={marasol} alt='' />
                            <p></p>
                            <p> WBDS</p>
                            <p>Listado</p>
                            <p>Branding</p>
                            <p>2024</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>ctm dor </p>
                            <img src={ctm} alt='' />
                            <p></p>
                            <p>WBDS</p>
                            <p>Listado</p>
                            <p>Branding</p>
                            <p>2024</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>smile burguer</p>
                            <img src={smile} alt='' />
                            <p></p>
                            <p>WBDS</p>
                            <p>Listado</p>
                            <p>Branding</p>
                            <p>2024</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>smile burguer</p>
                            <img src={smile} alt='' />
                            <p></p>
                            <p>Design <br className='hide-on-desk'/>Rush</p>
                            <p>Listado</p>
                            <p>Branding</p>
                            <p>2024</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>approach</p>
                            <img src={approach} alt='' />
                            <p></p>
                            <p>WBDS</p>
                            <p>Listado</p>
                            <p>Branding</p>
                            <p>2024</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>{window.innerWidth <= 800 ? <p>dca influence</p> : <p>dca influence house</p>}</p>
                            <img src={dca} alt='' />
                            <p></p>
                            <p>WBDS</p>
                            <p>Listado</p>
                            <p>Branding</p>
                            <p>2024</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>life</p>
                            <img src={life} alt='' />
                            <p></p>
                            <p>WBDS</p>
                            <p>Listado</p>
                            <p>Branding</p>
                            <p>2024</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>prop</p>
                            <img src={prop} alt='' />
                            <p></p>
                            <p>WBDS</p>
                            <p>Listado</p>
                            <p>Branding</p>
                            <p>2024</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>prop</p>
                            <img src={prop} alt='' />
                            <p></p>
                            <p>Behance</p>
                            {window.innerWidth <=800 ? <p>SGD</p> : <p>Selo Graphic Design</p>}
                            <p>Branding</p>
                            <p>2024</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>prop</p>
                            <img src={prop} alt='' />
                            <p></p>
                            <p>Behance</p>
                            <p>Selo Stock</p>
                            <p>Branding</p>
                            <p>2024</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>kaiçara</p>
                            <img src={kaicara} alt='' />
                            <p></p>
                            <p>WBDS</p>
                            <p>Listado</p>
                            <p>Branding</p>
                            <p>2024</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>kaiçara</p>
                            <img src={kaicara} alt='' />
                            <p></p>
                            <p>WBDS</p>
                            <p>Listado</p>
                            <p>Branding</p>
                            <p>2024</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>marasol pousada</p>
                            <img src={marasol} alt='' />
                            <p></p>
                            <p>BDC</p>
                            <p>Listado</p>
                            <p>Branding</p>
                            <p>2024</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>marasol pousada</p>
                            <img src={marasol} alt='' />
                            <p></p>
                            <p>BDC</p>
                            <p>Listado</p>
                            <p>Branding</p>
                            <p>2024</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>immersy</p>
                            <img src={immersy} alt='' />
                            <p></p>
                            <p>WBDS</p>
                            <p>Listado</p>
                            <p>Branding</p>
                            <p>2024</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>immersy</p>
                            <img src={immersy} alt='' />
                            <p></p>
                            <p>abduzeedo</p>
                            <p>Listado</p>
                            <p>Branding</p>
                            <p>2024</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>immersy</p>
                            <img src={immersy} alt='' />
                            <p></p>
                            <p>BDA</p>
                            <p>Shortlist</p>
                            <p>Branding</p>
                            <p>2024</p>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}
