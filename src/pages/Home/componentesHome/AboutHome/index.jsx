import React, { useEffect, useRef } from 'react'
import './abouthome.css'
import { useLocation } from 'react-router-dom';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SplitType from 'split-type'

export default function AboutHome() {
    const location = useLocation();
    const containerRef = useRef()

    // gsap.set([".square-one", ".square-two"],{
    //     opacity:0
    // })
    useGSAP(() => {
        createText()
        createPTextAnimation()
    },[])
    function createText(){
        const text = new SplitType(".manifesto-text h1", { types: "words, chars"})
        const tl = gsap.timeline({
           scrollTrigger:{
            trigger: containerRef.current,
            start: "top bottom-=250",
           }
        })

        tl.fromTo(text.chars,{
            yPercent: 500,
            ease: "none"
        },{
            yPercent: 0,
            ease: "power1.out",
        })
    }
    function createPTextAnimation(){
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:containerRef.current,
                start: "top+=200 bottom-=300",
                markers:false
            }
        })
        tl.fromTo([".square-one", ".square-two"],{
            yPercent: 20,
            opacity:0
        },{
            yPercent: 0,
            opacity: 1,
            ease: "power1.out",
            delay:0.5
        })

    }
    return (

        <section className={location.pathname == '/about' ? ' container-about container-about-ab ' : 'container-about'} ref={containerRef}>
            <div className='grid-global'>
                <div className={location.pathname == '/about' ? 'container-manifesto container-manifesto-ab' : 'container-manifesto'}>
                    <div className='manifesto'>
                        <h2>[ NOSSO MANIFESTO ]</h2>
                    </div>
                    <div className='manifesto-text'>
                        <h1>
                            Alimentando o caos que <br /> existe em toda ordem. <br /> Coordenando a ordem <br /> que existe em todo caos.
                        </h1>

                        <div className='squares'>
                            <div className='square-one'>
                                <p>
                                    Não apenas criamos. Nós recriamos, reviramos <br />
                                    a casa, vasculhamos gavetas, colocamos tudo <br />
                                    abaixo. Causamos incômodo, instauramos o <br />
                                    caos, mas tudo isso de forma sistemática para <br />
                                    revelar o verdadeiro sentido das coisas.
                                </p>
                            </div>

                            <div className='square-two'>
                            <p>
                                Não fazemos algo apenas por vaidade ou <br />
                                capricho, temos uma nata "imparabilidade" <br />
                                até encontrar função, beleza e autenticidade <br />
                                em nossas criações, que transcendem até <br />
                                mesmo nossa própria existência.
                            </p>
                        </div>
                        </div>



                    </div>

                </div>

            </div>
        </section>


    )
}
