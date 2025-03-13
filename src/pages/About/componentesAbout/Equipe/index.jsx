import './equipe.css'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

import carol from '../../../../assets/img/time-revelatio/carol.png'
import pedro from '../../../../assets/img/time-revelatio/pedro.png'
import rebeca from '../../../../assets/img/time-revelatio/rebeca.png'
import caio from '../../../../assets/img/time-revelatio/caio.png'
import emilia from '../../../../assets/img/time-revelatio/emilia.png'
import gabriel from '../../../../assets/img/time-revelatio/gabriel.png'
import jeff from '../../../../assets/img/time-revelatio/jeff.png'
import joao from '../../../../assets/img/time-revelatio/joao.png'
import vinicius from '../../../../assets/img/time-revelatio/vinicius.png'
import breno from '../../../../assets/img/time-revelatio/breno.png'
import victoria from '../../../../assets/img/time-revelatio/victoria.png'








import { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";



export default function Equipe() {
    gsap.registerPlugin(useGSAP, ScrollTrigger)
    const mediasUrl = []

    const time = [
        { numero: 1, nome: "Pedro Bezerra", func: "Coord. de Inovaçao" },
        { numero: 2, nome: "Carol Vieira", func: "UX/UI Designer" },
        { numero: 3, nome: "Rebeca Liberal", func: "UX/UI Designer" },
        { numero: 4, nome: "Caio Lopes", func: "UX/UI Designer" },
        { numero: 5, nome: "Emilia Revoredo", func: "UX/UI Designer" },
        { numero: 6, nome: "Gabriel Barbosa", func: "Front-End Dev" },
        { numero: 7, nome: "Jeff Marcelo", func: "Front-End Dev" },
        { numero: 8, nome: "João Dornelas", func: "Back-End Dev" },
        { numero: 9, nome: "Vinicius Pereira", func: "Full-Stack Dev" },
        { numero: 10, nome: "Breno Orapacen", func: "Full-Stack Dev" },
        { numero: 11, nome: "Victoria Xavier", func: "Full-Stack Dev" },



    ]


    useEffect(() => {
        const listElement = root.querySelector('.equipe ul')
        const rows = listElement.querySelectorAll('li')
        const mediaContainer = root.querySelector('.media-container')
        const container = document.querySelector('.sec-equipe')

        document.querySelectorAll(".medias img").forEach(img => {
            mediasUrl.push(img.getAttribute('src'))
        })


        rows.forEach((row, index) => {
            row.addEventListener('mouseenter', () => {
                createMedia(index)
            })
        })
        listElement.addEventListener('mouseleave', () => {
            mediaContainer.classList.remove('on') // I hide the container
            Array.from(mediaContainer.children).forEach(el => {
                el.remove() // I empty the content of media-container
            })
        })
        const createMedia = (index) => {
            let div = document.createElement("div")
            let image = document.createElement("img")

            image.src = mediasUrl[index]

            div.appendChild(image)
            mediaContainer.appendChild(div)

            gsap.to([div, image], {
                y: 0,
                duration: 0.6,
                ease: 'expo.inOut'
            })
            if (mediaContainer.children.length > 20) {
                mediaContainer.children[0].remove()
            }
        }


        listElement.addEventListener('mouseenter', () => {
            mediaContainer.classList.add('on')
        })

        listElement.addEventListener('mouseleave', () => {
            mediaContainer.classList.remove('on')

            Array.from(mediaContainer.children).forEach(el => {
                el.remove()
            })
        })

        gsap.set(mediaContainer, { yPercent: -50 })

        const yTo = gsap.quickTo(mediaContainer, 'y', {
            duration: 0.5,
            ease: 'power4'
        })


        listElement.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const ajuste = window.innerWidth < 480 ? 1 : 0.85
            const adjustedY = e.clientY - (rect.top * ajuste); 
            yTo(adjustedY );
        })


    }, [])










    return (
        <section className='sec-equipe'>
            <div className='grid-global'>
                <div className='equipe'>
                    <ul>
                        {
                            time.map((pessoa, index) => (
                                <li key={pessoa.numero}>
                                    <span>{pessoa.numero}</span>
                                    <div className='equipe-nome'>
                                        <span>{pessoa.nome}</span>
                                        <span>{pessoa.func}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                </div>


            </div>

            <div className='medias' aria-hidden="true" >
                <img src={pedro} alt="" />
                <img src={carol} alt='' />
                <img src={rebeca} alt="" />
                <img src={caio} alt="" />
                <img src={emilia} alt="" />
                <img src={gabriel} alt="" />
                <img src={jeff} alt="" />
                <img src={joao} alt="" />
                <img src={vinicius} alt="" />
                <img src={breno} alt="" />
                <img src={victoria} alt="" />

            </div>
            <div className='media-container'></div>
        </section>
    )
}

