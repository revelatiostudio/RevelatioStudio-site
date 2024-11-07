import React from 'react'
import './ideias.css'

import arrow from '../../assets/img/home/arrow-ideias.svg'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ideias({ color = 'black-ideias' }) {
    gsap.registerPlugin(useGSAP, ScrollTrigger);


    useGSAP(() => {
        const sections = [...document.querySelectorAll('.sections')];

        sections.forEach((sec) => {
            ScrollTrigger.create({
                trigger: sec,
                start: "top center",
                end: "bottom center",
                toggleClass: { targets: sec, className: "active" },
                onEnter: () => sec.classList.add("active"),
                onLeave: () => sec.classList.remove("active"),
                onEnterBack: () => sec.classList.add("active"),
                onLeaveBack: () => sec.classList.remove("active"),
            });

        })
    })


    return (
        <section className={`container_ideias ${color}`}>
            <div className='grid-global'>
                <div className={`sections ${color}`}>
                    <div className='options opt-number'>
                        <a>01</a>
                    </div>
                    <div className='options text'>
                        <a>Ideias & Estratégias</a>
                    </div>


                    <div className='options-list options'>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Posicionamento</p>
                        </div>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Estratégia de Marca</p>
                        </div>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Narrativa</p>
                        </div>
                    </div>
                    <div className='options-list options'>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Consultoria de Inovação</p>
                        </div>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Tom de Voz</p>
                        </div>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Identidade Verbal</p>
                        </div>
                    </div>
                    <div className='options-list options'>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Naming</p>
                        </div>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Workshops</p>
                        </div>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Mentoria</p>
                        </div>
                    </div>

                </div>
                <div className={`sections ${color}`}>
                    <div className='options opt-number'>
                        <a>02</a>
                    </div>
                    <div className='options text'>
                        <a>Criação & Design</a>
                    </div>
                    <div className='options-list options'>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Logo System</p>
                        </div>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Identidade Visual</p>
                        </div>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Wireframes</p>
                        </div>
                    </div>
                    <div className='options-list options'>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Direção de Arte</p>
                        </div>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Packaging Design</p>
                        </div>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Protótipos</p>
                        </div>

                    </div>
                    <div className='options-list options'>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>UX/UI</p>
                        </div>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Website</p>
                        </div>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Mockups</p>
                        </div>

                    </div>

                </div>
                <div className={`sections ${color} sections_last`}>
                    <div className='options opt-number'>
                        <a>03</a>
                    </div>
                    <div className='options text'>
                        <a>Tecnologia</a>
                    </div>

                    <div className='options-list options'>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Front End</p>

                        </div>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Back End</p>
                        </div>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Automação</p>
                        </div>
                        
                    </div>
                    <div className='options-list options'>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Desenvolvimento Criativo</p>
                        </div>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Integração de Sistemas</p>
                        </div>
                        <div className={`option ${color} `}>
                            <span><img src={arrow} alt='' /></span>
                            <p>Inteligência Artificial</p>
                        </div>
                        
                    </div>
                    <div className='options-list options'>
                    </div>

                </div>

            </div>

        </section>
    )
}
