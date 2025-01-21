import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import logo_white from '../../assets/img/home/logo.svg'
import logo_black from '../../assets/img/home/logo_black.svg'
import menu_img from '../../assets/img/menu-img.jpg'
import seta from '../../assets/img/seta-menu.svg'

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

import { motion } from "framer-motion"
import { filter } from 'framer-motion/client';


export default function NavBar({ color }) {

    const tl = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
    const location = useLocation();

    const linksPaginas = [
        { path: '/', pagina: 'Home', numero: '01' },
        { path: '/about', pagina: 'Estúdio', numero: '02' },
        { path: '/cases', pagina: 'Cases', numero: '03' },
        { path: '/contato', pagina: 'Contato', numero: '04' },
        { path: '/', pagina: 'Playground', numero: '05' }
    ]


    function verificaMenu() {
        setIsMenuOpen(!isMenuOpen)
    }
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.set([".link-menu p", ".link-menu h1", ".link-menu img"], { y: 85 });

        tl.current = gsap.timeline({ paused: true })
            .to(".menu-overlay", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power4.inOut",
                duration: 1.25
            }).to([".link-menu p", ".link-menu h1", ".link-menu img"], {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
            })

    })

    useEffect(() => {
        if (isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isMenuOpen])



    return (
        <>
            <div className='grid-global'>
                <nav className={`navbar ${color}`}>

                    <div className='logo'>
                        {color == 'white' ?
                            <Link to='/'> <img src={logo_white} alt='' /></Link>
                            :
                            <Link to='/'> <img src={logo_black} alt='' /></Link>
                        }

                    </div>

                    <div>
                        <p>Revelamos o âmago dos negócios.</p>
                    </div>

                    <div className={location.pathname == '/contato' ? "pt-br pt-br-contato" : "pt-br"}>
                        <p>PT|EN</p>
                    </div>

                    <div className={location.pathname == '/contato' ? "nav-menu nav-menu-contato" : "nav-menu"} onClick={verificaMenu}>
                        <p>[Menu]</p>
                    </div>

                </nav>

            </div>

            <div className='menu-overlay'>
                <div className='grid-global'>
                    <nav className={`navbar-menu navbar`}>

                        <div className='logo'>
                            <a href='/'> <img src={logo_white} alt='' /></a>
                        </div>

                        <div>
                            <p>Revelamos o âmago dos negócios.</p>
                        </div>

                        <div className='pt-br'>
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

                        <div className='links-menu'>

                            {
                                linksPaginas.map((pg, index) => (
                                    <motion.div
                                        style={!isMobile ? { filter: "blur(2px)" } : {}}
                                        whileHover={!isMobile ? { x: -40, filter: "blur(0px)" } : {}}
                                        transition={{ ease: "easeOut" }}
                                        key={pg.numero}
                                    >

                                        <div key={pg.numero} className='link-menu' onClick={verificaMenu}>
                                            <p>[{pg.numero}]</p>
                                            <Link to={pg.path}><h1>{pg.pagina}</h1></Link>
                                            <Link to={pg.path}> <img src={seta} alt='' /></Link>

                                        </div>

                                    </motion.div>

                                ))
                            }

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
