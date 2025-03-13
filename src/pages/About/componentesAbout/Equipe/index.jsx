import './equipe.css'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

import carol from '../../../../assets/img/time-revelatio/carol.png'
import pedro from '../../../../assets/img/time-revelatio/pedro.png'
import rebeca from '../../../../assets/img/time-revelatio/rebeca.png'
import { useEffect, useRef } from 'react';



export default function Equipe() {
    gsap.registerPlugin(useGSAP)
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

        document.querySelectorAll(".medias img").forEach(img => {
            mediasUrl.push(img.getAttribute('src'))
        })


        rows.forEach((row, index) => {
            row.addEventListener('mouseenter', () => {
                createMedia(index)
            })
        })
        const createMedia = (index) => {
            let div = document.createElement("div")
            let image = document.createElement("img")

            image.src = mediasUrl[index] // Url corresponding to the index parameter

            div.appendChild(image) // The created image becomes the child of div
            mediaContainer.appendChild(div) // The div created becomes the child of media-container

            gsap.to([div, image], {
                y: 0, // Move both elements to 0
                duration: 0.6, // During 0.6s
                ease: 'expo.inOut' // With an expo ease
            })
            if (mediaContainer.children.length > 20) {
                // I target the first image in the container and remove it from the DOM
                mediaContainer.children[0].remove()
            }
        }
        listElement.addEventListener('mousemove', (e) => {
            yTo(e.clientY )
        })

        listElement.addEventListener('mouseenter', () => {
            // I display the container on hover of the list
            mediaContainer.classList.add('on')
        })

        listElement.addEventListener('mouseleave', () => {
            // I hide the container
            mediaContainer.classList.remove('on')

            // I empty the content of media-container
            Array.from(mediaContainer.children).forEach(el => {
                el.remove()
            })
        })

        gsap.set(mediaContainer, { yPercent: -80 })

        // yTo is attached to the y property of media-container
        const yTo = gsap.quickTo(mediaContainer, 'y', {
            duration: 0.5, // duration of the update of the y value
            ease: 'power4' // non-linear update
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

            </div>
            <div className='media-container'></div>
        </section>
    )
}

