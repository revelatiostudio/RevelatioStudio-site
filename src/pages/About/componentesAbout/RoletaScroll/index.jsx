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

    useGSAP(() => {
        const container = rouletteRef.current;
        const items = gsap.utils.toArray('.country');
        let mm = gsap.matchMedia();

        gsap.set('.country', {
            y: 350

        })

       

           
            mm.add("(max-width: 1920px)", () => {
                
                const tl1920 = gsap.timeline()
                gsap.to(items, {
                    yPercent: -((items.length) * 100),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top top',
                        end: () => "+=" + container.offsetHeight * 2,
                        scrub: 0.5,
                        pin: true,
                        snap: 1 / (items.length - 1)
                    }
                });
                items.forEach((item) => {
                    tl1920.to(item, {
                        scrollTrigger: {
                            trigger: item,
                            start: 'center-=20px 50%',
                            end: 'center 40%',
                            scrub: true,
                            onEnter: () => item.classList.add("active"),
                            onLeave: () => item.classList.remove("active"),
                            onEnterBack: () => item.classList.add("active"),
                            onLeaveBack: () => item.classList.remove("active"),
                        }
                    }, 0).to(item, {
                        opacity: 0,
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 150px',
                            end: 'bottom top',
                            scrub: true
                        }
    
                    }, 0).from(item, {
                        opacity: 0,
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 800px',
                            end: 'bottom center',
                            scrub: true,
                        }
    
                    }, 0)
    
    
    
                });

            })

            
           

        
        
        
        mm.add("(max-width: 1366px)", () => {
            mm.revert();
            const tl1366 = gsap.timeline()
            gsap.to(items, {
                yPercent: -((items.length) * 100),
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    end: () => "+=" + container.offsetHeight * 2.5,
                    scrub: 0.5,
                    pin: true,
                    snap: 1 / (items.length - 1)
                }
            });

            items.forEach((item) => {
                tl1366.to(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'center-=10px 50%',
                        end: 'center 40%',
                        scrub: true,
                        onEnter: () => item.classList.add("active"),
                        onLeave: () => item.classList.remove("active"),
                        onEnterBack: () => item.classList.add("active"),
                        onLeaveBack: () => item.classList.remove("active"),
                    }
                }, 0).to(item, {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 150px',
                        end: 'bottom top',
                        scrub: true
                    }

                }, 0).from(item, {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        end: 'bottom center',
                        scrub: true,
                    }

                }, 0)



            });

        })

        mm.add("(max-width: 1280px)", () => {
            mm.revert();
            const tl1280 = gsap.timeline()
            gsap.to(items, {
                yPercent: -((items.length) * 120),
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    end: () => "+=" + container.offsetHeight * 2.5,
                    scrub: 0.5,
                    pin: true,
                    snap: 1 / (items.length - 1)
                }
            });

            items.forEach((item) => {
                tl1280.to(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top-=50px 50%',
                        end: 'bottom 55%',
                        scrub: true,
                        onEnter: () => item.classList.add("active"),
                        onLeave: () => item.classList.remove("active"),
                        onEnterBack: () => item.classList.add("active"),
                        onLeaveBack: () => item.classList.remove("active"),
                    }
               
                }, 0).to(item, {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 150px',
                        end: 'bottom top',
                        scrub: true,
                    }

                }, 0).from(item, {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 90%',
                        end: 'bottom center',
                        scrub: true,
                    }

                }, 0)



            });

        })
        

       






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
                            lugares.map((lugar) => (
                                <div className='country' key={lugar.estado}>
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
