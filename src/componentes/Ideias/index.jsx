import React from 'react'
import './ideias.css'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ideias() {
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
        <section className='container_ideias'>
            <div className='grid-global'>
                <div className='sections'>
                    <div className='options'>
                        <a>01</a>
                    </div>
                    <div className='options'>
                        <a>Ideias & Estratégias</a>
                    </div>


                    <div className='options'>
                        <p><span>↗</span> Posicionamento</p>
                        <p><span>↗</span> Estratégia de Marca</p>
                        <p><span>↗</span> Narrativa</p>
                    </div>
                    <div className='options'>
                        <p><span>↗</span> Consultoria de Inovação</p>
                        <p><span>↗</span> Tom de Voz</p>
                        <p><span>↗</span> Identidade Verbal</p>
                    </div>
                    <div className='options'>
                        <p><span>↗</span> Naming</p>
                        <p><span>↗</span> Workshops</p>
                        <p><span>↗</span> Mentoria</p>
                    </div>

                </div>
                <div className='sections '>
                    <div className='options'>
                        <a>02</a>
                    </div>
                    <div className='options'>
                        <a>Criação & Design</a>
                    </div>
                    <div className='options'>
                        <p><span>↗</span> Logo System</p>
                        <p><span>↗</span> Identidade Visual</p>
                        <p><span>↗</span> Wireframes</p>
                    </div>
                    <div className='options'>
                        <p><span>↗</span> Direção de Arte</p>
                        <p><span>↗</span> Packaging Design</p>
                        <p><span>↗</span> Protótipos</p>
                    </div>
                    <div className='options'>
                        <p><span>↗</span> UX/UI</p>
                        <p><span>↗</span> Website</p>
                        <p><span>↗</span> Mockups</p>
                    </div>

                </div>
                <div className='sections sections_last '>
                    <div className='options'>
                        <a>03</a>
                    </div>
                    <div className='options'>
                        <a>Tecnologia</a>
                    </div>

                    <div className='options'>
                        <p><span>↗</span> Front End</p>
                        <p><span>↗</span> Back End</p>
                        <p><span>↗</span> Automação</p>
                    </div>
                    <div className='options'>
                        <p><span>↗</span> Desenvolvimento Criativo</p>
                        <p><span>↗</span> Integração de Sistemas</p>
                        <p><span>↗</span> Inteligência Artificial</p>
                    </div>
                    <div className='options'>
                    </div>

                </div>

            </div>


        </section>
    )
}
