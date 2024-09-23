import React, { useRef } from 'react'
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
    ]
    const rouletteRef = useRef(null);

    useGSAP(() => {
        const container = rouletteRef.current;
        const items = gsap.utils.toArray('.country');
        
        gsap.to(items, {
          yPercent: -1050, 
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: 'bottom top',
            scrub: true, 
            pin: true, 
          }
        });
    
        items.forEach((item) => {
          gsap.to(item, {
            scrollTrigger: {
              trigger: item,
              start: 'top center',
              end: 'bottom center',
              scrub: true,
              onEnter: () => gsap.to(item.classList.add("active")),
              onLeave: () => gsap.to(item.classList.remove("active")),
              onEnterBack: () => gsap.to(item.classList.add("active")),
              onLeaveBack: () => gsap.to(item.classList.remove("active")),
            }
          });
        });
      }, [lugares]);



    return (
        <section className='container-roulette'>
            <div className='grid-global'>

                <div className='grid-roulette' ref={rouletteRef}>
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
