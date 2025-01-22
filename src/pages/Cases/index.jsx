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


import { Link } from "react-router-dom";
import Transition from "../../transition";

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

const Cases = () => {
    gsap.registerPlugin(useGSAP)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const array = [

        { id: '1', img: approach, projeto: "Approach", tipo: "Brand", tag: "site" },
        { id: '2', img: nando, projeto: "Nando Reis", tipo: "Site Institucional", tag: "site" },
        { id: '3', img: immersy, projeto: "Immersy", tipo: "Brand", tag: "site" },
        { id: '4', img: life, projeto: "Life", tipo: "Rebranding", tag: "digital" },
        { id: '5', img: dca, projeto: "DCA Influence House", tipo: "Rebranding", tag: "digital" },
        { id: '6', img: prop, projeto: "Prop", tipo: "Brand", tag: "marca" },
        { id: '7', img: kaicara, projeto: "Kaiçara", tipo: "Brand", tag: "marca" },
        { id: '8', img: marasol, projeto: "Marasol Pousada", tipo: "Brand Strategy & Visual Identity", tag: "marca" },
        { id: '9', img: mistery, projeto: "Mistery of Lears Macaw", tipo: "UI & Dev", tag: "marca" },
    ]

    const [itens, setItens] = useState(array)
    const tags = [...new Set(array.map((foto) => foto.tag))]

    function filtraFotos(tag) {

        const novasFotos = array.filter((foto) => {
            return foto.tag === tag
        })
        setItens(novasFotos)
    }



    // useGSAP(() => {
    // const cases = [...document.querySelectorAll('.quadrado-image')];
    // const container = document.querySelector('.all-cases-container');

    // //   cases.forEach((a) => {
    // //     const divWidth = a.offsetWidth;
    // //     const divHeight = a.offsetHeight;
    // //     gsap.to(a,{
    // //         top: gsap.utils.random(-100, containerHeight - divHeight),
    // //         left: gsap.utils.random(0, containerWidth - divWidth),
    // //         duration: 0.5,
    // //         scale: gsap.utils.random(0.5, 1.5)
    // //         // yPercent: gsap.utils.distribute({
    // //         //     base: 50,
    // //         //     amount: 1000,
    // //         //     from: 'random',
    // //         //     grid: "rows"
    // //         // })
    // //     })
    // //   })

    // const positions = [
    //     { top: "10%", left: "10%" }, //1
    //     { top: "14%", left: "70%" }, //2
    //     { top: "40%", left: "30%" }, //3
    //     { top: "70%", left: "75%" }, //4
    //     { top: "70%", left: "40%" }, //5
    //     { top: "100%", left: "70%" }, //6
    //     { top: "100%", left: "10%" }, //7
    //     { top: "130%", left: "70%" }, //8
    //     { top: "140%", left: "0%" }, // 9
    //     { top: "64%", left: "30%" },
    //     { top: "64%", left: "50%" },
    //     { top: "64%", left: "90%" },
    //     { top: "80%", left: "20%" },
    //     { top: "80%", left: "70%" },
    //   ];


    //     gsap.to(cases, {
    //         top: (i) => positions[i].top,
    //         left: (i) => positions[i].left,
    //         transform: "none",
    //         stagger: 0.075,
    //         duration: 0.75,
    //         ease: "power2.out",
    //     })

    //     // cases.forEach((b) => {
    //     //     gsap.to(b, {
    //     //         width: gsap.utils.random(155, 418),
    //     //         height: gsap.utils.random(183, 466)
    //     //     })
    //     // })



    // },[itens])
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
                        itens.map((a) => (
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

            </section>
        </div>

    )
}

export default Transition(Cases)