import React, { useEffect } from 'react'
import './abouthome.css'
import { useLocation } from 'react-router-dom';

export default function AboutHome() {
    const location = useLocation();
    useEffect(() => {

    })
    return (

        <section className={location.pathname == '/about' ? ' container-about container-about-ab ' : 'container-about'}>
            <div className='grid-global'>
                <div className={location.pathname == '/about' ? 'container-manifesto container-manifesto-ab' : 'container-manifesto'}>
                    <div className='manifesto'>
                        <h2>[ NOSSO MANIFESTO ]</h2>
                    </div>
                    <div className='manifesto-text'>
                        <h1>
                            Alimentando o caos que <br /> existe em toda ordem. <br /> Coordenando a ordem <br /> que existe em todo caos.
                        </h1>

                        <div className='squares'>
                            <div className='square-one'>
                                <p>
                                    Não apenas criamos. Nós recriamos, reviramos <br />
                                    a casa, vasculhamos gavetas, colocamos tudo <br />
                                    abaixo. Causamos incômodo, instauramos o <br />
                                    caos, mas tudo isso de forma sistemática para <br />
                                    revelar o verdadeiro sentido das coisas.
                                </p>
                            </div>

                            <div className='square-two'>
                            <p>
                                Não fazemos algo apenas por vaidade ou <br />
                                capricho, temos uma nata "imparabilidade" <br />
                                até encontrar função, beleza e autenticidade <br />
                                em nossas criações, que transcendem até <br />
                                mesmo nossa própria existência.
                            </p>
                        </div>
                        </div>



                    </div>

                </div>

            </div>
        </section>


    )
}
