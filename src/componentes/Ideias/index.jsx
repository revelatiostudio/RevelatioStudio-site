import React from 'react'
import './ideias.css'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ideias({color = 'black-ideias'}) {
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
                    <div className='options'>
                        <a>Ideias & Estratégias</a>
                    </div>


                    <div className='options-list options'>
                        <p><span className='no-emoji'>↗</span> Posicionamento</p>
                        <p><span className='no-emoji'>↗</span> Estratégia de Marca</p>
                        <p><span className='no-emoji'>↗</span> Narrativa</p>
                    </div>
                    <div className='options-list options'>
                        <p><span className='no-emoji'>↗</span> Consultoria de Inovação</p>
                        <p><span className='no-emoji'>↗</span> Tom de Voz</p>
                        <p><span className='no-emoji'>↗</span> Identidade Verbal</p>
                    </div>
                    <div className='options-list options'>
                        <p><span className='no-emoji'>↗</span> Naming</p>
                        <p><span className='no-emoji'>↗</span> Workshops</p>
                        <p><span className='no-emoji'>↗</span> Mentoria</p>
                    </div>

                </div>
                <div className={`sections ${color}`}>
                    <div className='options opt-number'>
                        <a>02</a>
                    </div>
                    <div className='options'>
                        <a>Criação & Design</a>
                    </div>
                    <div className='options-list options'>
                        <p><span className='no-emoji'>↗</span> Logo System</p>
                        <p><span className='no-emoji'>↗</span> Identidade Visual</p>
                        <p><span className='no-emoji'>↗</span> Wireframes</p>
                    </div>
                    <div className='options-list options'>
                        <p><span className='no-emoji'>↗</span> Direção de Arte</p>
                        <p><span className='no-emoji'>↗</span> Packaging Design</p>
                        <p><span className='no-emoji'>↗</span> Protótipos</p>
                    </div>
                    <div className='options-list options'>
                        <p><span className='no-emoji'>↗</span> UX/UI</p>
                        <p><span className='no-emoji'>↗</span> Website</p>
                        <p><span className='no-emoji'>↗</span> Mockups</p>
                    </div>

                </div>
                <div className={`sections ${color} sections_last`}>
                    <div className='options opt-number'>
                        <a>03</a>
                    </div>
                    <div className='options'>
                        <a>Tecnologia</a>
                    </div>

                    <div className='options-list options'>
                        <p><span className='no-emoji'>↗</span> Front End</p>
                        <p><span className='no-emoji'>↗</span> Back End</p>
                        <p><span className='no-emoji'>↗</span> Automação</p>
                    </div>
                    <div className='options-list options'>
                        <p><span className='no-emoji'>↗</span> Desenvolvimento Criativo</p>
                        <p><span className='no-emoji'>↗</span> Integração de Sistemas</p>
                        <p><span className='no-emoji'>↗</span> Inteligência Artificial</p>
                    </div>
                    <div className='options-list options'>
                    </div>

                </div>

            </div>

        </section>
    )
}
