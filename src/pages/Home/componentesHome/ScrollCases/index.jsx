import React from 'react'
import './scrollcases.css'
import case1 from '../../../../assets/img/home/cases/case1.png'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollCases() {
    gsap.registerPlugin(useGSAP, ScrollTrigger);

    function createScrollCases() {
        const cases = [...document.querySelectorAll('.case-1')];
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.cases-scroll',
                start: '-20px top',
                endTrigger: 'overlay-blur bottom',
                end: 'bottom top',
                scrub: true,
                pin: true,
            }
        });

        cases.forEach((a) => {
            tl.to(a, {
                y: -1800,
                scrub: 2,
            }, 0)
        })

        cases.forEach((a) => {
            gsap.to(a,{
                xPercent:gsap.utils.random(75, 10),
    
    
            })
    

        })

      

    }

    useGSAP(() => {
        createScrollCases();

    })

    return (
        <div className='grid'>
            <section className='cases-scroll'>
                <div className='middle-text'>
                    <h1>Nossos Cases</h1>
                </div>
                <div className='overlay-blur'>
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
                    <img src={case1} alt='' />
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


            </section>
        </div>
    )
}
