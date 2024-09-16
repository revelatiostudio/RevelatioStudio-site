import React from 'react'

import img_solucoes from '../../assets/img/home/img_solucoes.png'
import blour from '../../assets/img/home/blour.png'
import './solucoes.css'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Solucoes() {

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    function tiraBlour() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.container-solucoes',
                start: 'top top',
                end:'+=800',
                scrub: 1,
            }
        });

        tl.to('.blour', {
            opacity: 0,
        })


    }
    useGSAP(() => {
        tiraBlour();

    })


    return (
        <section className='container-solucoes'>
            <div className='grid'>
                <div className='herofirst'>
                    <div className='left_text'>
                        <h1>Trabalhamos</h1>
                        <h1>com soluções de</h1>
                    </div>

                    <div className='right_part_solucoes'>

                        <div className='time'>
                            <p>RECIFE,BRA <a>[12:46PM]</a></p>
                            <p>NEW YORK,EUA <a>[12:46PM]</a></p>
                            <div className='border-time'></div>
                        </div>

                    </div>
                </div>
                <div className='herosecond'>
                    <h1>Branding</h1>
                    <h1>& Tecnologia</h1>
                </div>
                <div className='herofinal'>

                    <div className='texts_studio'>
                        <div>
                            <h2>[NOSSO ESTÚDIO]</h2>
                            <p>Entregamos soluções para negócios</p>
                            <p>que entendem que esse é o momento </p>
                            <p>para mostrar pro mundo ao que vieram. </p>

                            <div className='seecases'>
                                <a href=''>Ver todos os cases <a>↗</a></a>
                            </div>
                        </div>

                        <div className='studio_left'>
                            <p className='p1'>Temos voracidade criativa e estratégica,</p>
                            <p>concebendo cada entrega de modo único,</p>
                            <p>entendendo a fundo as singularidades e</p>
                            <p>necessidades, revelando e dando luz à</p>
                            <p>propósito, sentido e resultado para as</p>
                            <p>mais diferentes empresas e modelos de</p>
                            <p>negócios.</p>
                        </div>

                    </div>

                    <div className='studio_img'>
                        <img src={img_solucoes} alt='' />
                        <img className="blour" src={blour} alt='' />



                    </div>


                </div>
            </div>

        </section>

    )
}
