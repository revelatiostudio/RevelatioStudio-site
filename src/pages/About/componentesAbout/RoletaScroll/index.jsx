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
        { estado: 'Balneário', pais: 'BR' },
        { estado: 'Porto Alegre', pais: 'BR' },
        { estado: 'Acre', pais: 'BR' },
        { estado: 'Fortaleza', pais: 'BR' },
        { estado: 'São Carlos', pais: 'BR' },
        { estado: 'Bela Vista', pais: 'BR' },
        { estado: 'Canela', pais: 'BR' },
        { estado: 'Imperatriz', pais: 'BR' },
        { estado: 'Mato Grosso', pais: 'BR' },
        { estado: 'Rio de Janeiro', pais: 'BR' }

    ]
    const rouletteRef = useRef(null);

    const itemsRef = useRef([]);

    useGSAP(() => {
        const container = rouletteRef.current;
        //const items = gsap.utils.toArray('.country');
        const items = itemsRef.current;





        gsap.set('.country', {
            y: 450

        })

        gsap.to(items, {
            y: -((items.length) * 80),
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top top',
              end: () => "+=" + container.offsetHeight * 2,
              scrub: true,
              pin: true,
              //snap: 1 / (items.length - 1),
              onUpdate: self => {
                const viewportHeight = window.innerHeight;
                items.forEach((item) => {
                  const rect = item.getBoundingClientRect();
                  const itemCenter = rect.top + rect.height / 2;
                  const distanceFromCenter = Math.abs(viewportHeight / 2 - itemCenter);
      
                  
                  const activation = 50;
      
                  if (distanceFromCenter < activation) {
                    item.classList.add("active");
                  } else {
                    item.classList.remove("active");
                  }
                });
              }
            }
          });





    }, []);



    return (
        <section className='container-roulette'>
            <div className='grid-global'>

                <div className='grid-roulette' ref={rouletteRef}>
                    <div className='left-roulette'>
                        <h2>Nossos projetos <br />Estão ao redor do mundo</h2>
                    </div>

                    <div className='middle-roulette'>
                        <div className='container-blur'></div>
                        {
                            lugares.map((lugar,index) => (
                                <div className='country' key={lugar.estado} ref={(el) => itemsRef.current[index] = el}>
                                    <h1>{lugar.estado}</h1>
                                    <p>({lugar.pais})</p>
                                </div>

                            ))
                        }


                        <div className='container-blur bottom'></div>


                    </div>


                    <div className='rigth-roulette'>
                        <p>2020 - 2024</p>
                    </div>

                </div>


            </div>

        </section>
    )
}
