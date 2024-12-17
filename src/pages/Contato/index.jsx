import React from 'react'
import Transition from '../../transition'
import './contato.css'

import contatoImg from '../../assets/img/contato/image-contato2.png'
import logo from '../../assets/img/contato/logo-submit.png'



const Contato = () => {
    return (
        <section className='container-contato'>
            <div className='container-separator'>
                <div className='image-form'>
                    <img src={contatoImg} alt='image-contato' />

                    <div className='contatos'>
                        <div className='bottom-endereco'>
                            <h1>[NOSSO ESCRITÓRIO]</h1>
                            <p>Estrada do Encanamento, 846.</p>
                            <p>Room 306</p>
                            <p>Recife, Brasil</p>
                            <p>Horário: 12:46 PM</p>
                        </div>
                        <div className='bottom-contato'>
                            <h1>[CONTATO]</h1>
                            <p>contato@revelatio.studio</p>
                            <p>(81) 99444.4949</p>
                        </div>
                    </div>

                </div>
                <div className='contato-form'>
                    <div className='formulario-contato'>
                        <h1>Preencha o formulário <br /> para entrarmos em contato!</h1>
                        <form>
                            <input required type='text' id='nome' placeholder='Como podemos te chamar? *' />
                            <input type='text' id='empresa' placeholder='Qual o nome do seu negócio?' />
                            <div className='form-div'>
                                <input type='tel' id='celular' placeholder='Celular para contato' />
                                <input type='number' id='cnpj' placeholder='CNPJ da empresa' />
                            </div>
                            <input required type='email' id='empresa' placeholder='Informe seu email *' />
                            <input required type='text' id='empresa' placeholder='Qual cidade / estado / país a sua empresa está ou será estabelecida?' />

                            <button type='submit'>
                                <div className='button-prox'>
                                Próxima etapa
                                <img src={logo} alt=''/>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Transition(Contato)