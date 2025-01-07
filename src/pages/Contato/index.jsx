import React, { useEffect, useRef, useState } from 'react'
import Transition from '../../transition'
import './contato.css'

import contatoImg from '../../assets/img/contato/image-contato2.png'
import logo from '../../assets/img/contato/logo-submit.png'
import ReCAPTCHA from "react-google-recaptcha";
import emailJs from '@emailjs/browser'




const Contato = () => {
    const [nome, setNome] = useState("")
    const [negocio, setNegocio] = useState("")
    const [celular, setCelular] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [email, setEmail] = useState("")
    const [cidade, setCidade] = useState("")

    const [captcha, setCaptcha] = useState("");



    function novoCliente(event) {
        event.preventDefault();

        if (!captcha) {
            alert('captcha pendente');
            return;
        }




        const templateParams = {
            from_name: nome,
            empresa: negocio,
            contato: celular,
            cnpj: cnpj,
            email: email,
            cidade: cidade
        }
        setNome("")
        setNegocio("")
        setCelular("")
        setCnpj("")
        setEmail("")
        setCidade("")

        emailJs.send("service_0o5ybc4", "template_zcg486u", templateParams, "q8kFNA-VjEX21TVzZ")
            .then((response) => {
                alert("Seu email foi enviado com sucesso!")
            }, (erro) => {
                console.log("erro", erro)
            })


    }

      const [horaRecife, setHoraRecife] = useState('');
      
      
    
    
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
    
          
          if( Number(comparaHora) <= 11){
            setHoraRecife(horaCerta + " " + "AM")
          }else{
            setHoraRecife(horaCerta + " " + "PM")
          }
          
        };
    
      
        
        useEffect(() => {
          obterHoraRecife()
    
          const intervalo = setInterval(() => {
            obterHoraRecife();
          }, 30000); 
      
          return () => clearInterval(intervalo);
    
        },[horaRecife])


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
                            <p>Horário: {horaRecife}</p>
                        </div>
                        <div className='bottom-contato'>
                            <h1>[CONTATO]</h1>
                            <p>contato@revelatio.studio</p>
                            <p>(81) 99444.4949</p>
                        </div>
                    </div>

                </div>
                <div className='contato-form' data-lenis-prevent>
                    <div className='formulario-contato'>
                        <h1>Preencha o formulário <br className='hide-in-mobile' /> para entrarmos em contato!</h1>
                        <form onSubmit={novoCliente}>
                            <input required type='text' id='nome' placeholder='Como podemos te chamar? *' onChange={(e) => setNome(e.target.value)} value={nome} />
                            <input type='text' id='empresa' placeholder='Qual o nome do seu negócio?' onChange={(e) => setNegocio(e.target.value)} value={negocio} />
                            <div className='form-div'>
                                <input type='tel' id='celular' placeholder='Celular para contato' onChange={(e) => setCelular(e.target.value)} value={celular} />
                                <input type='number' id='cnpj' placeholder='CNPJ da empresa' onChange={(e) => setCnpj(e.target.value)} value={cnpj} />
                            </div>
                            <input required type='email' id='empresa' placeholder='Informe seu email *' onChange={(e) => setEmail(e.target.value)} value={email} />
                            <input required type='text' id='cidade' placeholder='Qual cidade / estado / país a sua empresa está ou será estabelecida?' onChange={(e) => setCidade(e.target.value)} value={cidade} />
                           <div className='captcha'>
                           <ReCAPTCHA
                                sitekey={import.meta.env.VITE_SITE_KEY}
                                onChange={setCaptcha}
                            />
                           </div>
                            <button type='submit'>
                                <div className='button-prox'>
                                    Próxima etapa
                                    <img src={logo} alt='' />
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