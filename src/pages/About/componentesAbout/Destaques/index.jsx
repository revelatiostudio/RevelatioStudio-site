import React from 'react'
import './destaques.css'

import { gsap } from "gsap";

import img1 from '../../../../assets/img/home/cases/case1.png'
import img2 from '../../../../assets/img/home/cases/case2.png'
import img3 from '../../../../assets/img/home/cases/case3.png'



export default function Destaques() {
    function trocaImagem(event) {
        const img = event.currentTarget.querySelector('img')
        gsap.to(img,

            {
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            }
        )

    }
    function saiImagem(event) {
        const img = event.currentTarget.querySelector('img')
        gsap.to(img,

            {
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            }
        )

    }


    return (
        <section className='container-destaques'>
            <div className='grid-global'>
                <div className='destaques-text'>
                    <h1>Destaques<span className='hide-on-mobile'><br /></span>
                         & Reconhecimentos
                    </h1>
                    <h2>Seja o próximo a se juntar à nossa <span className='hide-on-mobile'><br /></span>
                        galeria de projetos premiados!</h2>
                    <p><a>Entrar em contato ↗</a></p>
                </div>

                <div className='container-category-first'>
                    <div className='category'>
                        <h3>Project</h3>
                        <h3></h3>
                        <h3>Award</h3>
                        <h3>Mention</h3>
                        <h3>Category</h3>
                        <h3>Year</h3>
                    </div>

                    <div className='projects'>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>Top Design King</p>
                            <img src={img1} alt='' />
                            <p></p>
                            <p>Top Design King</p>
                            <p>King of The Day</p>
                            <p>Website</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem} >
                            <p>Top Design King</p>
                            <img src={img2} alt='' />
                            <p></p>
                            <p>CSSDA</p>
                            <p>UX</p>
                            <p>Website</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>Top Design King</p>
                            <img src={img3} alt='' />
                            <p></p>
                            <p>Top Design King</p>
                            <p>King of The Day</p>
                            <p>Website</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>Top Design King</p>
                            <img src={img1} alt='' />
                            <p></p>
                            <p>CSSOTD</p>
                            <p>Site of The Day</p>
                            <p>Website</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>Top Design King</p>
                            <img src={img2} alt='' />
                            <p></p>
                            <p>Behance</p>
                            <p>Featured</p>
                            <p>Branding</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>Top Design King</p>
                            <img src={img3} alt='' />
                            <p></p>
                            <p>WBDS</p>
                            <p>Featured</p>
                            <p>Branding</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>Top Design King</p>
                            <img src={img1} alt='' />
                            <p></p>
                            <p>Design Rush</p>
                            <p>Mention</p>
                            <p>Branding</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>Top Design King</p>
                            <img src={img2} alt='' />
                            <p></p>
                            <p>Behance</p>
                            <p>Featured</p>
                            <p>Branding</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>Top Design King</p>
                            <img src={img3} alt='' />
                            <p></p>
                            <p>Design Nominees</p>
                            <p>Site of The Day</p>
                            <p>Website</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>Top Design King</p>
                            <img src={img1} alt='' />
                            <p></p>
                            <p>Top Design King</p>
                            <p>King of The Day</p>
                            <p>Website</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>Top Design King</p>
                            <img src={img2} alt='' />
                            <p></p>
                            <p>WBDS</p>
                            <p>Mention</p>
                            <p>Branding</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row' onMouseEnter={trocaImagem} onMouseLeave={saiImagem}>
                            <p>Top Design King</p>
                            <img src={img3} alt='' />
                            <p></p>
                            <p>WGA</p>
                            <p>Guru of The Month</p>
                            <p>Website</p>
                            <p>2023</p>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}
