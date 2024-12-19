import React, { useEffect, useState } from 'react'

import img_solucoes from '../../assets/img/home/img_solucoes.png'
import blour from '../../assets/img/home/blour.png'
import './solucoes.css'

import seta from '../../assets/img/arrow-secs.svg'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Solucoes() {

    const [horaRecife, setHoraRecife] = useState('');
    const [horaLocal, setHoraLocal] = useState('');
    const [idioma, setIdioma] = useState('')

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    function tiraBlour() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.container-solucoes',
                start: 'top top',
                end: '+=800',
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







    const obterHoraRecife = () => {
        const horaRecife = new Date().toLocaleString("pt-BR", {
            timeZone: "America/Recife",
            timeZoneName: "short",
            hour12: false
        });

        var hora = horaRecife.split(' ')
        hora = hora[1].split(':')
        var horaCerta = hora[0] + ":" + hora[1]
        const comparaHora = hora[0]


        if (Number(comparaHora) <= 11) {
            setHoraRecife(horaCerta + " " + "AM")
        } else {
            setHoraRecife(horaCerta + " " + "PM")
        }

    };

    const obterHoraLocal = () => {
        const localTime = new Date().toLocaleString("pt-BR", {
            timeZoneName: "short",
            hour12: false
        });

        var hora = localTime.split(' ')
        hora = hora[1].split(':')
        var horaCerta = hora[0] + ":" + hora[1]
        const comparaHora = hora[0]


        if (Number(comparaHora) <= 11) {
            setHoraLocal(horaCerta + " " + "AM")
        } else {
            setHoraLocal(horaCerta + " " + "PM")
        }
        let idioma = navigator.language || navigator.userLanguage;
        const pcIdioma = idioma.split('-')[1]
        setIdioma(pcIdioma)

    };



    useEffect(() => {
        obterHoraRecife()
        obterHoraLocal()

        const intervalo = setInterval(() => {
            obterHoraRecife();
        }, 30000);

        return () => clearInterval(intervalo);

    }, [horaRecife])


    return (
        <section className='container-solucoes'>
            <div className='grid-global'>
                <div className='herofirst'>
                    <div className='left_text'>
                        <h1>Trabalhamos</h1>
                        <h1>com soluções de</h1>
                    </div>

                    <div className='right_part_solucoes'>

                        <div className='time'>
                            <p>RECIFE,BR <a>[{horaRecife}]</a></p>
                            <p>LOCAL,{idioma} <a>[{horaLocal}]</a></p>
                            <div className='border-time'></div>
                        </div>

                    </div>
                </div>
                <div className='border-solucoes-top'></div>
                <div className='herosecond'>
                    <h1>Branding</h1>
                    <h1>& Tecnologia</h1>
                </div>
                <div className='border-solucoes-bottom'></div>
                <div className='herofinal'>

                    <div className='texts_studio'>
                        <div>
                            <h2>[NOSSO ESTÚDIO]</h2>
                            <p>Entregamos soluções para negócios</p>
                            <p>que entendem que esse é o momento </p>
                            <p>para mostrar pro mundo ao que vieram. </p>


                            <div className='studio_left studio-res'>
                                <p className='p1'>Temos voracidade criativa e estratégica,</p>
                                <p>concebendo cada entrega de modo único,</p>
                                <p>entendendo a fundo as singularidades e</p>
                                <p>necessidades, revelando e dando luz à</p>
                                <p>propósito, sentido e resultado para as</p>
                                <p>mais diferentes empresas e modelos de</p>
                                <p>negócios.</p>
                            </div>

                            <div className='seecases'>
                                <a href=''>Ver todos os cases</a>
                                <span><a><img src={seta} alt='' /></a></span>
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
