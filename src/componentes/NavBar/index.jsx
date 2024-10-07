import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'

import logo_white from '../../assets/img/home/logo.svg'
import logo_black from '../../assets/img/home/logo_black.svg'
import menu_img from '../../assets/img/menu-img.jpg'

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

export default function NavBar({ color }) {

    const tl = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false)
 

    function verificaMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    useGSAP(() => {
        gsap.set([".link p", ".link h1"], {y: 85});

        tl.current = gsap.timeline({paused: true})
        .to(".menu-overlay", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power4.inOut",
            duration: 1.25
        }).to([".link p", ".link h1"],{
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.inOut",
            delay: -0.75,
        })

    })

    useEffect(() => {
        if(isMenuOpen){
            tl.current.play();
        }else {
            tl.current.reverse();
        }
    }, [isMenuOpen])

    return (
        <>
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

                <div className='nav-menu' onClick={verificaMenu}>
                    <p>[Menu]</p>
                </div>

            </nav>
            <div className='menu-overlay'>
                <div className='grid-global'>
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

                        <div className='nav-menu' onClick={verificaMenu}>
                            <p>[Menu]</p>
                        </div>

                    </nav>
                    <div className='branding'>
                        <h2>Trabalhamos <br />com soluções <br /> de</h2>
                        <h2 className='p1'>Branding <br /> & Tecnologia</h2>

                    </div>

                    <div className='links-container'>
                        <div className='links-img'>
                            <img src={menu_img} alt='' />

                        </div>
                        <div className='links'>
                            <div className='link'>
                                <p>[01]</p>
                                <h1>Home</h1>
                            </div>
                            <div className='link'>
                                <p>[02]</p>
                                <h1>Estúdio</h1>
                            </div>
                            <div className='link'>
                                <p>[03]</p>
                                <h1>Cases</h1>
                            </div>
                            <div className='link'>
                                <p>[04]</p>
                                <h1>Contato</h1>
                            </div>
                            <div className='link'>
                                <p>[05]</p>
                                <h1>Playground</h1>
                            </div>

                        </div>

                    </div>

                    <div className='footer-menu'>
                        <div className='social-mn'>

                            <div className='top_part'>
                                <p>[SOCIAL MEDIA]</p>
                            </div>

                            <div className='bottom_part'>
                                <p>INSTAGRAM</p>
                                <p>BEHANCE</p>
                            </div>

                        </div>

                        <h3>[ NOSSO ESTÚDIO ]</h3>
                        <h3>[ NOSSO ESTÚDIO ]</h3>
                        <h3>[ NOSSO ESTÚDIO ]</h3>


                        <div className='right_part'>
                            <div className='time_text'>
                                <p>[CURRENTLY TIME]</p>
                            </div>

                            <div className='time'>
                                <p>RECIFE,BRA <a>[12:46PM]</a></p>
                                <p>NEW YORK,EUA <a>[12:46PM]</a></p>

                            </div>

                        </div>

                    </div>

                </div>




            </div>
        </>

    )
}
