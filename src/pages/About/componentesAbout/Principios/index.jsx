import React, { useRef } from 'react'
import './clientes.css'
import ibm from '../../../../assets/img/about/clientes/ibm-logo.svg'
import navigator from '../../../../assets/img/about/clientes/navigator-logo.svg'
import unileven from '../../../../assets/img/about/clientes/unileven-logo.svg'



export default function Clientes() {
    return (
        <section className='clients-container'>
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
                        <img src={unileven} alt='unileven-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={navigator} alt='navigator-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={unileven} alt='unileven-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={navigator} alt='navigator-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={unileven} alt='unileven-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={navigator} alt='navigator-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={unileven} alt='unileven-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={navigator} alt='navigator-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={unileven} alt='unileven-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={navigator} alt='navigator-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={unileven} alt='unileven-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={navigator} alt='navigator-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={unileven} alt='unileven-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={navigator} alt='navigator-logo' />
                    </div>
                    <div className='grid-item'>
                        <img src={unileven} alt='unileven-logo' />
                    </div>
                </div>
            </div>
        </section>
    )
}
