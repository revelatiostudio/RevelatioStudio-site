import React, { useRef } from 'react'
import './roletaScroll.css'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function RoletaScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const lugares = [
        { estado: 'Waterloo', pais: 'CA' },
        { estado: 'New York', pais: 'EUA' },
        { estado: 'Londres', pais: 'UK' },
        { estado: 'Boca Raton', pais: 'EUA' },
        { estado: 'Porto', pais: 'PT' },
        { estado: 'Recife', pais: 'BR' },
        { estado: 'São Paulo', pais: 'BR' },
        { estado: 'Salvador', pais: 'BR' },
        { estado: 'Natal', pais: 'BR' },
        { estado: 'Manaus', pais: 'BR' },
        { estado: 'Chapecó', pais: 'BR' },
        { estado: 'Balneário Camboriú', pais: 'BR' },
        { estado: 'Porto Alegre', pais: 'BR' },
        { estado: 'Acre', pais: 'BR' },
        { estado: 'Fortaleza', pais: 'BR' },
        { estado: 'São Carlos', pais: 'BR' },
        { estado: 'Bela Vista', pais: 'BR' },
        { estado: 'Canela', pais: 'BR' },
        { estado: 'Imperatriz', pais: 'BR' },
        { estado: 'Mato Grosso do Sul', pais: 'BR' },
        { estado: 'Rio de Janeiro', pais: 'BR' }

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
