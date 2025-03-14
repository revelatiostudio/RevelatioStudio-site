import React, { useRef, useState } from 'react'
import './scrollcases.css'
import case1 from '../../../../assets/img/home/cases/case1.png'
import case2 from '../../../../assets/img/home/cases/case2.png'
import case3 from '../../../../assets/img/home/cases/case3.png'
import seta from '../../../../assets/img/home/seta-branca.svg'
import setac from '../../../../assets/img/home/cases/arrow-cases.svg'
import setaBaixo from '../../../../assets/img/home/cases/arrow-down.svg'
import gradiente from '../../../../assets/img/home/gradiente-2.png'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Progress } from "@nextui-org/react";
import throttle from 'lodash.throttle';
import { Link } from 'react-router-dom'


export default function ScrollCases() {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const [scrolll, setScroll] = useState(0);
    const caseScroll = useRef(null);
    const imgTam = useRef(null)

    function animationScrollCases() {
        let mm = gsap.matchMedia();
        const tam = window.innerHeight;
        gsap.set('.case-1', {
            y: 263
        })


        const updateProgress = throttle((self) => {
            setScroll(self.progress);  // Atualiza o estado com throttle
        }, 200);  // Atualiza no máximo a cada 100ms

        const cases = [...document.querySelectorAll('.case-1')];
        const container = caseScroll.current;
        const imgHeigth = imgTam.current.offsetHeight
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: '-20px top',
                // endTrigger: 'overlay-blur bottom',
                end: () => "+=" + container.offsetHeight * 2,
                scrub: 0.1,
                pin: true,
                onUpdate: updateProgress
            }
        });

        cases.forEach((a) => {
            tl.to(a, {
                //y: tam <= 650 ? -1400 : -1300,
                y: -((imgHeigth) * 5.5)
            }, 0)
        })

        mm.add('(min-width: 1921px)', () => {
            cases.forEach((a) => {
                gsap.to(a, {
                    xPercent: gsap.utils.random(10, 70),
                });
            });
        });

        mm.add('(max-width: 1920px)', () => {
            cases.forEach((a) => {
                gsap.to(a, {
                    xPercent: gsap.utils.random(10, 70),
                });
            });
        });

        mm.add('(max-width: 1200px)', () => {
            cases.forEach((a) => {
                gsap.to(a, {
                    xPercent: gsap.utils.random(60, 20),
                });
            });
        });

        mm.add('(max-width: 800px)', () => {
            cases.forEach((a) => {
                gsap.to(a, {
                    xPercent: gsap.utils.random(10, 50),
                });
            });
        });
        mm.add('(max-width: 480px)', () => {
            cases.forEach((a) => {
                gsap.to(a, {
                    xPercent: gsap.utils.random(5, 30),
                });
            });
        });

        return () => mm.revert();

    }

    function animationScrollCasesMobile() {

        const cases = document.querySelectorAll('.case-tablet')


        gsap.set(cases, {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
        })
        cases.forEach((a) => {
            gsap.to(a, {
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
                scrollTrigger:{
                    trigger: a,
                    start: 'top-=20% center',
                    end: 'bottom center',
                    ease:'none',
                    pinSpacer: false
                
                }
            },0)
        })
       
    }


    useGSAP(() => {
        if (window.innerWidth >= 801) {
            animationScrollCases()
        } else {
            animationScrollCasesMobile()
        }


    })

    return (
        <div className='grid-global'>
            {window.innerWidth <= 800 ? (
                <section className='cases-tablet' ref={caseScroll}>
                    <div className='header-tablet'>
                        <h1>Nossos cases</h1>
                        <img src={setaBaixo} alt='seta para baixo' />
                    </div>
                    <div className='projects-tablet'>
                        <div className='case-tablet'>
                            <img src={case1} alt='' ref={imgTam} />
                            <div className='project'>
                                <div className='project-name'>
                                    <p>Nome do projeto</p>
                                    <p>Nome do projeto</p>
                                </div>
                                <p>Website | Branding</p>

                            </div>
                        </div>
                        <div className='case-tablet'>
                            <img src={case1} alt='' ref={imgTam} />
                            <div className='project'>
                                <div className='project-name'>
                                    <p>Nome do projeto</p>
                                    <p>Nome do projeto</p>
                                </div>
                                <p>Website | Branding</p>

                            </div>
                        </div>
                        <div className='case-tablet'>
                            <img src={case1} alt='' ref={imgTam} />
                            <div className='project'>
                                <div className='project-name'>
                                    <p>Nome do projeto</p>
                                    <p>Nome do projeto</p>
                                </div>
                                <p>Website | Branding</p>

                            </div>
                        </div>
                        <div className='case-tablet'>
                            <img src={case1} alt='' ref={imgTam} />
                            <div className='project'>
                                <div className='project-name'>
                                    <p>Nome do projeto</p>
                                    <p>Nome do projeto</p>
                                </div>
                                <p>Website | Branding</p>

                            </div>
                        </div>

                        <div className='all-casest'>
                            <div className='all-cases'>
                                <a href=''>Ver todos os cases</a>
                                <span><a><img src={seta} alt='' /></a></span>
                            </div>
                        </div>

                    </div>

                </section>
            ) : (
                <section className='cases-scroll' ref={caseScroll}>

                    <div className='middle-text'>
                        <h1>Nossos Cases</h1>
                    </div>

                    <div className="progress-bar">
                        <Progress classNames={{
                            base: 'h-[0.1rem]',
                            indicator: 'bg-white'

                        }}
                            size="sm" aria-label="Loading..."
                            color="default" value={scrolll} radius='none' minValue={0} maxValue={1} valueLabel={scrolll}
                        />
                    </div>

                    <div className='overlay-blur'>
                        <img src={gradiente} alt='' />
                    </div>
                    <div>

                    </div>

                    <div className='case-1'>
                        <img src={case1} alt='' ref={imgTam} />
                        <div className='project'>
                            <div className='project-name'>
                                <p>Nome do projeto</p>
                                <p>Nome do projeto</p>
                            </div>
                            <p>Website | Branding</p>

                        </div>
                    </div>
                    <div className='case-1'>
                        <img src={case2} alt='' />
                        <div className='project'>
                            <div className='project-name'>
                                <p>Nome do projeto</p>
                                <p>Nome do projeto</p>
                            </div>
                            <p>Website | Branding</p>

                        </div>
                    </div>
                    <div className='case-1'>
                        <img src={case3} alt='' />
                        <div className='project'>
                            <div className='project-name'>
                                <p>Nome do projeto</p>
                                <p>Nome do projeto</p>
                            </div>
                            <p>Website | Branding</p>

                        </div>
                    </div>
                    <div className='case-1'>
                        <img src={case1} alt='' />
                        <div className='project'>
                            <div className='project-name'>
                                <p>Nome do projeto</p>
                                <p>Nome do projeto</p>
                            </div>
                            <p>Website | Branding</p>

                        </div>
                    </div>
                    <div className='case-1'>
                        <img src={case2} alt='' />
                        <div className='project'>
                            <div className='project-name'>
                                <p>Nome do projeto</p>
                                <p>Nome do projeto</p>
                            </div>
                            <p>Website | Branding</p>

                        </div>
                    </div>
                    <div className='case-1'>
                        <img src={case3} alt='' />
                        <div className='project'>
                            <div className='project-name'>
                                <p>Nome do projeto</p>
                                <p>Nome do projeto</p>
                            </div>
                            <p>Website | Branding</p>

                        </div>
                    </div>

                    <div className='overlay-blur bottom'>
                    <img src={gradiente} alt='' />
                    </div>
                    <div className='see-cases'>
                        <div className='all-cases'>
                            <Link to='/cases'>Ver todos os cases</Link>
                            <span><a><img src={seta} alt='' /></a></span>
                        </div>
                        <div className='explore'>
                            <div className='sec-explore'>
                                <p>Scroll to explore</p>
                                <span><img src={setac} alt='' /></span>
                            </div>
                            <p className='p1'>6 Cases</p>
                        </div>

                    </div>


                </section>
            )

            }



        </div>
    )
}
