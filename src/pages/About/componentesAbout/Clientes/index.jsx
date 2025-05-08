import React, { useRef } from 'react'
import './clientes.css'

import acaso from '../../../../assets/img/about/clientes/acaso.svg'
import ani from '../../../../assets/img/about/clientes/ani.svg'
import carvalheira from '../../../../assets/img/about/clientes/carvalheira.png'
import coc from '../../../../assets/img/about/clientes/coc.png'
import hsm from '../../../../assets/img/about/clientes/hsm.png'
import loc from '../../../../assets/img/about/clientes/loc.png'
import loomi from '../../../../assets/img/about/clientes/loomi.svg'
import PeG from '../../../../assets/img/about/clientes/p&g.png'
import sas from '../../../../assets/img/about/clientes/sas.svg'
import seek from '../../../../assets/img/about/clientes/seek.svg'
import serious from '../../../../assets/img/about/clientes/serious.svg'
import serur from '../../../../assets/img/about/clientes/serur.svg'
import singu from '../../../../assets/img/about/clientes/singu.svg'
import trois from '../../../../assets/img/about/clientes/trois.svg'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Clientes() {
    const clientesRef = useRef(null)
    gsap.registerPlugin(useGSAP)
    useGSAP(() => {
        textClients()
    })

    function textClients(){
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: clientesRef.current,
                start: "top bottom-=200",
                markers:false
            }
        })
        tl.fromTo(".title-clients",{
            xPercent: -20,
            opacity:0,
            ease: "none"
        },{
            xPercent: 0,
            opacity: 1,
            stagger:0.4,
            ease: "power1.out",
        }).fromTo(".text-clients",{
            xPercent: 20,
            opacity:0,
            ease: "none"

        },{
            xPercent: 0,
            opacity: 1,
            stagger:0.4,
            ease: "power1.out",

        },0)
    }

    return (
        <section className='clients-container' ref={clientesRef}>
            <div className='grid-global'>
                <div className='header-clients'>
                    <div className='title-clients'>
                        <h1>
                            Nossos Clientes
                        </h1>
                    </div>

                    <div className='text-clients'>
                        <p>
                            Aqui estão algumas marcas que você provavelmente conhece e <br />
                            com as quais tivemos o prazer de trabalhar. Agora que temos sua  <br />
                            atenção, vale dizer que, quanto maior a marca, menos espaço  <br />
                            sobra para experimentação criativa, já que outras prioridades  <br />
                            acabam tomando a frente. Mas relaxa—somos um time <br />
                            apaixonado que sempre entrega, independentemente do desafio! <br />
                            Ah, e só para avisar... sua lanterna do celular está ligada!
                        </p>
                    </div>
                </div>

                <div className='grid-clients'>
                    <div className='grid-item'>
                        <img src={acaso} alt='acaso-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={ani} alt='ani-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={carvalheira} alt='carvalheira-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={coc} alt='coc-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={hsm} alt='hsm-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={loc} alt='loc-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={loomi} alt='loomi-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={PeG} alt='PeG-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={sas} alt='sas-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={seek} alt='seek-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={serious} alt='serious-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={serur} alt='serur-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={singu} alt='singu-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={trois} alt='trois-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={acaso} alt='acaso-logo' />
                    </div>
                </div>
            </div>
        </section>
    )
}
