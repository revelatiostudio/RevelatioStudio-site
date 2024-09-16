import React, { useState } from 'react'
import './scrollcases.css'
import case1 from '../../../../assets/img/home/cases/case1.png'
import case2 from '../../../../assets/img/home/cases/case2.png'
import case3 from '../../../../assets/img/home/cases/case3.png'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Progress } from "@nextui-org/react";
import throttle from 'lodash.throttle';


export default function ScrollCases() {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const [scrolll, setScroll] = useState(0);


    useGSAP(() => {
        gsap.set('.case-1', {
            y: 263
        })


        const updateProgress = throttle((self) => {
            setScroll(self.progress);  // Atualiza o estado com throttle
        }, 200);  // Atualiza no máximo a cada 100ms

        const cases = [...document.querySelectorAll('.case-1')];
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.cases-scroll',
                start: '-20px top',
                endTrigger: 'overlay-blur bottom',
                end: 'bottom top',
                scrub: 0.5,
                pin: true,
                onUpdate: updateProgress
            }
        });

        cases.forEach((a) => {
            tl.to(a, {
                y: -1300,
            }, 0)
        })

        cases.forEach((a) => {
            gsap.to(a, {
                xPercent: gsap.utils.random(75, 10),


            })


        })


    })

    return (
        <div className='grid'>
            <section className='cases-scroll'>

                <div className='middle-text'>
                    <h1>Nossos Cases</h1>
                </div>

                <div className="progress-bar">
                    <Progress classNames={{
                        base: 'h-[0.1rem]'

                    }}
                        size="sm" aria-label="Loading..."
                        color="default" value={scrolll} radius='none' minValue={0} maxValue={1} valueLabel={scrolll}
                    />
                </div>

                <div className='overlay-blur'>
                </div>
                <div>

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
                </div>
                <div className='see-cases'>
                    <div className='all-cases'>
                        <a href=''>Ver todos os cases <a>↗</a></a>
                    </div>
                    <div className='explore'>
                        <p>Scroll to explore ↓</p>
                        <p className='p1'>6 Cases</p>
                    </div>

                </div>


            </section>



        </div>
    )
}
