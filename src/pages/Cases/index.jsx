import React, { useRef, useState } from "react";
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

import { Link } from "react-router-dom";
import Transition from "../../transition";

import { gsap } from "gsap";
import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';

const Cases = () => {
    gsap.registerPlugin(useGSAP)
    const array = [

        { id: '1', img: approach },
        { id: '2', img: nando},
        { id: '3', img: immersy },
        { id: '4', img: life },
        { id: '5', img: dca},
        { id: '6', img: prop},
        { id: '7', img: kaicara},
        { id: '8', img: marasol },
        { id: '9', img: mistery },
    ]

   
    useGSAP(() => {
    const cases = [...document.querySelectorAll('.quadrado-image')];
    const container = document.querySelector('.all-cases-container');

    //   cases.forEach((a) => {
    //     const divWidth = a.offsetWidth;
    //     const divHeight = a.offsetHeight;
    //     gsap.to(a,{
    //         top: gsap.utils.random(-100, containerHeight - divHeight),
    //         left: gsap.utils.random(0, containerWidth - divWidth),
    //         duration: 0.5,
    //         scale: gsap.utils.random(0.5, 1.5)
    //         // yPercent: gsap.utils.distribute({
    //         //     base: 50,
    //         //     amount: 1000,
    //         //     from: 'random',
    //         //     grid: "rows"
    //         // })
    //     })
    //   })

    const positions = [
        { top: "10%", left: "10%" }, //1
        { top: "14%", left: "70%" }, //2
        { top: "40%", left: "30%" }, //3
        { top: "70%", left: "75%" }, //4
        { top: "70%", left: "40%" }, //5
        { top: "100%", left: "70%" }, //6
        { top: "100%", left: "10%" }, //7
        { top: "130%", left: "70%" }, //8
        { top: "48%", left: "0%" },
        { top: "64%", left: "30%" },
        { top: "64%", left: "50%" },
        { top: "64%", left: "90%" },
        { top: "80%", left: "20%" },
        { top: "80%", left: "70%" },
      ];

    
        gsap.to(cases, {
            top: (i) => positions[i].top,
            left: (i) => positions[i].left,
            transform: "none",
            stagger: 0.075,
            duration: 0.75,
            ease: "power2.out",
        })

        // cases.forEach((b) => {
        //     gsap.to(b, {
        //         width: gsap.utils.random(155, 418),
        //         height: gsap.utils.random(183, 466)
        //     })
        // })
    


    },[])




    return (
        <div className="grid-global">
            <section className="container-cases">
                <div className="side-menu">
                    <h1>Filtre por: </h1>

                    <ol className="filtros">
                        <li>Todos</li>
                        <li>Site</li>
                        <li>Produto digital</li>
                        <li>Marca</li>
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
                <div className="all-cases-container">
                    {
                        array.map((a) => (
                            <div className="quadrado-image" key={a.id}>
                                <h1>{a.id}</h1>
                                <img src={a.img} alt="" />
                            </div>

                        ))
                    }

                </div>

            </section>
        </div>

    )
}

export default Transition(Cases)