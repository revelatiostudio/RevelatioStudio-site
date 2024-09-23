import React from 'react'
import './roletaScroll.css'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function RoletaScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const lugares = [
        { estado: 'Porto Alegre', pais: 'Brasil' },
        { estado: 'Natal', pais: 'Brasil' },
        { estado: 'Porto', pais: 'Portugal' },
        { estado: 'Recife', pais: 'Brasil' },
        { estado: 'Londres', pais: 'Inglaterra' },
        { estado: 'Imperatriz', pais: '...' },
        { estado: 'Waterloo', pais: '...' },

        { estado: 'Recife', pais: 'Brasil' },
        { estado: 'Londres', pais: 'Inglaterra' },
        { estado: 'Imperatriz', pais: '...' },
        { estado: 'Waterloo', pais: '...' },
    ]

    useGSAP(() => {
        const lugares = [...document.querySelectorAll('.country')];
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.grid-roulette',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                pin: true,
                markers: true
            }
        });


        lugares.forEach((lugar, index) => {
            tl.to(lugar, {
                y: -1000
            }, 0)
            ScrollTrigger.create({
                trigger: lugar,
                start: "top center",
                end: "bottom center",
                scrub: true,
                markers: true,
                onEnter: () => lugar.classList.add("active"),
                onLeave: () => lugar.classList.remove("active"),
                onEnterBack: () => lugar.classList.add("active"),
                onLeaveBack: () => lugar.classList.remove("active"),

            })

        })
    })



    return (
        <section className='container-roulette'>
            <div className='grid-global'>

                <div className='grid-roulette'>
                    <div className='left-roulette'>
                        <h2>Nossos projetos <br />Estão ao redor do mundo</h2>
                    </div>

                    <div className='middle-roulette'>
                        <div className='container-blour'></div>
                        {
                            lugares.map((lugar) => (
                                <div className='country' key={lugar.estado}>
                                    <h1>{lugar.estado}</h1>
                                    <p>({lugar.pais})</p>
                                </div>

                            ))
                        }


                        <div className='container-blour bottom'></div>


                    </div>


                    <div className='rigth-roulette'>
                        <p>2020 - 2024</p>
                    </div>

                </div>


            </div>

        </section>
    )
}
