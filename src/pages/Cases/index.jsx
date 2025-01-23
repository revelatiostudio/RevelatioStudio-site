import React, { useEffect, useRef, useState } from "react";
import './cases.css'

import boxImg from '../../assets/img/cases/boardsLight.png'
import logoCases from '../../assets/img/cases/logo-cases.svg'

import nando from '../../assets/img/cases/nando.png'
import approach from '../../assets/img/cases/approach.png'
import immersy from '../../assets/img/cases/immersy.png'
import life from '../../assets/img/cases/life.png'
import dca from '../../assets/img/cases/dca.png'
import prop from '../../assets/img/cases/prop.png'
import kaicara from '../../assets/img/cases/kaicara.png'
import marasol from '../../assets/img/cases/marasol.png'
import mistery from '../../assets/img/cases/mistery.png'
import filtro from '../../assets/img/cases/filtro-cases.svg'
import close from '../../assets/img/cases/close-svg.svg'
import next from '../../assets/img/cases/next-page.svg'
import previous from '../../assets/img/cases/previous-page.svg'




import { Link } from "react-router-dom";
import Transition from "../../transition";

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Cases = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const array = [

        { id: '1', img: approach, projeto: "Approach", tipo: "Brand", tag: "site" },
        { id: '2', img: nando, projeto: "Nando Reis", tipo: "Site Institucional", tag: "site" },
        { id: '3', img: immersy, projeto: "Immersy", tipo: "Brand", tag: "site" },
        { id: '4', img: life, projeto: "Life", tipo: "Rebranding", tag: "digital" },
        { id: '5', img: dca, projeto: "DCA Influence House", tipo: "Rebranding", tag: "digital" },
        { id: '6', img: prop, projeto: "Prop", tipo: "Brand", tag: "marca" },
        { id: '7', img: kaicara, projeto: "Kaiçara", tipo: "Brand", tag: "marca" },
        { id: '8', img: mistery, projeto: "Mistery of Lears Macaw", tipo: "UI & Dev", tag: "marca" },
        { id: '9', img: marasol, projeto: "Marasol Pousada", tipo: "Brand Strategy & Visual Identity", tag: "marca" },
        
        // { id: '1', img: approach, projeto: "Approach", tipo: "Brand", tag: "site" },
        // { id: '2', img: nando, projeto: "Nando Reis", tipo: "Site Institucional", tag: "site" },
        // { id: '3', img: immersy, projeto: "Immersy", tipo: "Brand", tag: "site" },
        // { id: '4', img: life, projeto: "Life", tipo: "Rebranding", tag: "digital" },
        // { id: '5', img: dca, projeto: "DCA Influence House", tipo: "Rebranding", tag: "digital" },
        // { id: '6', img: prop, projeto: "Prop", tipo: "Brand", tag: "marca" },
        // { id: '7', img: kaicara, projeto: "Kaiçara", tipo: "Brand", tag: "marca" },
        // { id: '8', img: marasol, projeto: "Marasol Pousada", tipo: "Brand Strategy & Visual Identity", tag: "marca" },
        // { id: '9', img: mistery, projeto: "Mistery of Lears Macaw", tipo: "UI & Dev", tag: "marca" },
        // { id: '1', img: approach, projeto: "Approach", tipo: "Brand", tag: "site" },
        // { id: '2', img: nando, projeto: "Nando Reis", tipo: "Site Institucional", tag: "site" },
        // { id: '3', img: immersy, projeto: "Immersy", tipo: "Brand", tag: "site" },
        // { id: '4', img: life, projeto: "Life", tipo: "Rebranding", tag: "digital" },
        // { id: '5', img: dca, projeto: "DCA Influence House", tipo: "Rebranding", tag: "digital" },
        // { id: '6', img: prop, projeto: "Prop", tipo: "Brand", tag: "marca" },
        // { id: '7', img: kaicara, projeto: "Kaiçara", tipo: "Brand", tag: "marca" },
        // { id: '8', img: marasol, projeto: "Marasol Pousada", tipo: "Brand Strategy & Visual Identity", tag: "marca" },
        // { id: '9', img: mistery, projeto: "Mistery of Lears Macaw", tipo: "UI & Dev", tag: "marca" },
    ]



    const [itens, setItens] = useState(array)
    const [itensPerPage, setItensPerPage] = useState(9)
    const [currentPage, setCurrentPage] = useState(0)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = itens.slice(startIndex, endIndex)

    const pages = Math.ceil(itens.length / itensPerPage)
    console.log(currentPage)

    function filtraFotos(tag) {

        const novasFotos = array.filter((foto) => {
            return foto.tag === tag
        })
        setItens(novasFotos)
    }
    function proxPagina() {
        if (currentPage >= pages - 1) {
            return
        } else {
            window.scrollTo(0, 0);
            setCurrentPage(currentPage + 1)
        }
    }
    function voltaPagina() {
        if (currentPage <= 0) {
            return
        } else {
            window.scrollTo(0, 0);
            setCurrentPage(currentPage - 1)
        }
    }




    const tl = useRef();

    useGSAP(() => {
        gsap.set(".menu-mobile", { xPercent: -100 });
        gsap.set(".menu-open-mobile-black", { opacity: 0, display: "none" })

        tl.current = gsap.timeline({ paused: true })
            .to(".menu-open-mobile-black", {
                display: "block",
                opacity: 0.7,
            }).to(".menu-mobile", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                xPercent: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
            }, 0)
    })

    useGSAP(() => {
        const heroImages = [...document.querySelectorAll('.quadrado-image')]
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: '.all-cases-container',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })

        heroImages.forEach(image => {
            tl.to(image,{
                ease: 'none',
                yPercent: gsap.utils.random(-100, -50),
                // rotateZ: gsap.utils.random(-10, 5),
            },0)
        })
    })

    useEffect(() => {
        if (isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isMenuOpen])

    function verificaMenu() {
        setIsMenuOpen(!isMenuOpen)
    }





    return (
        <div className="grid-global">
            <section className="container-cases">
                <div className="side-menu">
                    <h1>Filtre por: </h1>

                    <ol className="filtros">
                        <li onClick={() => setItens(array)}>Todos</li>
                        <li onClick={() => filtraFotos("site")}>Site</li>
                        <li onClick={() => filtraFotos("digital")}>Produto digital</li>
                        <li onClick={() => filtraFotos("marca")}>Marca</li>
                    </ol>

                    <div className="work-together">
                        <img src={boxImg} alt="caixa branca com luz" />
                        <Link to="/contato">
                            <button>
                                Entrar em contato
                            </button>
                        </Link>
                    </div>

                    <div className="bottom-side-menu">
                        <div>
                            <h2>Projetos Realizados:</h2>
                            <p>+200</p>
                        </div>
                        <div className="image-side-menu">
                            <img src={logoCases} alt="Logo revelatio" />
                        </div>

                    </div>

                </div>
                <div className="filtro-mobile" onClick={verificaMenu}>
                    <img src={filtro} alt="filtro dos cases" />
                </div>
                <div className="menu-mobile">
                    <div className="head-menu">
                        <h1>Filtre por:</h1>
                        <img src={close} alt="close" onClick={verificaMenu} />
                    </div>

                    <ol className="filtros">
                        <li onClick={() => setItens(array)}>Todos</li>
                        <li onClick={() => filtraFotos("site")}>Site</li>
                        <li onClick={() => filtraFotos("digital")}>Produto digital</li>
                        <li onClick={() => filtraFotos("marca")}>Marca</li>
                    </ol>

                    <div className="work-together">
                        <img src={boxImg} alt="caixa branca com luz" />
                        <Link to="/contato">
                            <button>
                                Entrar em contato
                            </button>
                        </Link>
                    </div>

                </div>
                <div className="menu-open-mobile-black"></div>
                <div className="all-cases-container" >
                    {
                        currentItens.map((a) => (
                            <div className="quadrado-image" key={a.id}>
                                <img src={a.img} alt="" />
                                <div className="quadro-text">
                                    <p className="projeto">{a.projeto}</p>
                                    <p>{a.tipo}</p>
                                </div>
                            </div>

                        ))
                    }

                    
                </div>
                <div className="change-page">
                    <button onClick={voltaPagina}><img src={previous} alt="" /></button>
                    <div className="flex items-center gap-x-1">
                        <span className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-100 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-300 dark:text-black dark:focus:bg-black/10">{currentPage + 1}</span>
                        <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">of</span>
                        <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">{pages}</span>
                    </div>
                    <button onClick={proxPagina}><img src={next} alt="" /></button>

                </div>

            </section>
            
            
        </div>

    )
}

export default Transition(Cases)