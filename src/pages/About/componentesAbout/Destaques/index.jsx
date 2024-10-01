import React from 'react'
import './destaques.css'

export default function Destaques() {
    const teste = [...document.querySelectorAll('.project-list li')]
    console.log(teste)
    return (
        <section className='container-destaques'>
            <div className='grid-global'>
                <div className='destaques-text'>
                    <h1>Destaques<br />
                        & Reconhecimentos
                    </h1>
                    <h2>Seja o próximo a se juntar à nossa <br />
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
                        <div className='project-row'> 
                            <p>Top Design King</p>
                            <p></p>
                            <p>Top Design King</p>
                            <p>King of The Day</p>
                            <p>Website</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row'>
                            <p>Top Design King</p>
                            <p></p>
                            <p>CSSDA</p>
                            <p>UX</p>
                            <p>Website</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row'> 
                            <p>Top Design King</p>
                            <p></p>
                            <p>Top Design King</p>
                            <p>King of The Day</p>
                            <p>Website</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row'> 
                            <p>Top Design King</p>
                            <p></p>
                            <p>CSSOTD</p>
                            <p>Site of The Day</p>
                            <p>Website</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row'> 
                            <p>Top Design King</p>
                            <p></p>
                            <p>Behance</p>
                            <p>Featured</p>
                            <p>Branding</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row'> 
                            <p>Top Design King</p>
                            <p></p>
                            <p>WBDS</p>
                            <p>Featured</p>
                            <p>Branding</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row'> 
                            <p>Top Design King</p>
                            <p></p>
                            <p>Design Rush</p>
                            <p>Mention</p>
                            <p>Branding</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row'> 
                            <p>Top Design King</p>
                            <p></p>
                            <p>Behance</p>
                            <p>Featured</p>
                            <p>Branding</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row'> 
                            <p>Top Design King</p>
                            <p></p>
                            <p>Design Nominees</p>
                            <p>Site of The Day</p>
                            <p>Website</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row'> 
                            <p>Top Design King</p>
                            <p></p>
                            <p>Top Design King</p>
                            <p>King of The Day</p>
                            <p>Website</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row'>
                            <p>Top Design King</p>
                            <p></p>
                            <p>WBDS</p>
                            <p>Mention</p>
                            <p>Branding</p>
                            <p>2023</p>
                        </div>
                        <div className='project-row'>
                            <p>Top Design King</p>
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
