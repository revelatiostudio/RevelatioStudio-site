import React from 'react'
import './principios.css'

import seta from '../../../../assets/img/about/seta-prin.svg'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function principios() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const principios = [...document.querySelectorAll('.prin-1')];
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:'.container-principios',
                start: '150px top', 
                end: 'bottom top',
                scrub: 0.5,
                pin: true

            }
        });


        principios.forEach((principio) => {
            tl.to(principio,{
                filter: ' blur(0px)',
                backgroundColor: 'var(--color-gray-50)',
                duration: 2, 
                ease: 'power1.inOut'
            })
        })

      

     


    })





    return (
        <section className='container-principios'>
            <div className='principios'>
                <h1>Nossos <br /> Princípios</h1>
            </div>
            <div className='prin-1'>
                <div className='prin'>
                    <h2>Transparência</h2>
                    <img src={seta} alt='seta' />
                </div>
                <div className='prinText'>
                    <p>É ser claro como um cristal. Colocar as cartas na mesa e <br />
                        manter sempre uma via de diálogo honesta e dentro da <br />
                        realidade de cada projeto. É o comprometer-se a <br />
                        entregar algo que acreditamos, não importa o quão seja <br />
                        nosso esforço para tornar o desejável em tangível.</p>
                </div>

            </div>
            <div className='prin-1 sec'>
                <div className='prin'>
                    <h2>Envolvimento</h2>
                    <img src={seta} alt='seta' />
                </div>
                <div className='prinText'>
                    <p>É ser claro como um cristal. Colocar as cartas na mesa e <br />
                        manter sempre uma via de diálogo honesta e dentro da <br />
                        realidade de cada projeto. É o comprometer-se a <br />
                        entregar algo que acreditamos, não importa o quão seja <br />
                        nosso esforço para tornar o desejável em tangível.</p>
                </div>

            </div>
            <div className='prin-1 third'>
                <div className='prin'>
                    <h2>Provocação</h2>
                    <img src={seta} alt='seta' />
                </div>
                <div className='prinText'>
                    <p>É ser claro como um cristal. Colocar as cartas na mesa e <br />
                        manter sempre uma via de diálogo honesta e dentro da <br />
                        realidade de cada projeto. É o comprometer-se a <br />
                        entregar algo que acreditamos, não importa o quão seja <br />
                        nosso esforço para tornar o desejável em tangível.</p>
                </div>

            </div>
        </section>
    )
}
