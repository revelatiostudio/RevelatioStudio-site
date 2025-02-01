import React, { useEffect, useState } from 'react'
import './home.css'

import Solucoes from '../../componentes/Solucoes'


import homeImg from '../../assets/img/home/nova_home.png'
import revelatio from '../../assets/img/home/name_revelatio.svg'
import Services from '../../componentes/Services'
import AboutHome from './componentesHome/AboutHome'
import Ideias from '../../componentes/Ideias'
import Ambiente from '../../componentes/ambiente/Ambiente'
import BottomHome from './componentesHome/BottomHome'
import NavBar from '../../componentes/NavBar'
import ScrollCases from './componentesHome/ScrollCases'
import Transition from '../../transition'

const Home = () => {
  const [horaRecife, setHoraRecife] = useState('');
  const [horaLocal, setHoraLocal] = useState('');
  const [idioma, setIdioma] = useState('')
  
  


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

    const obterHoraLocal = () => {
      const localTime = new Date().toLocaleString("pt-BR", {
        timeZoneName: "short",
        hour12: false
      });

      var hora = localTime.split(' ')
      hora = hora[1].split(':')
      var horaCerta = hora[0] + ":" + hora[1]
      const comparaHora = hora[0]

      
      if( Number(comparaHora) <= 11){
        setHoraLocal(horaCerta + " " + "AM")
      }else{
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

    },[horaRecife])

    


 

  return (
    <section className='container-first-page'>

      <section className='home'>
        <img src={homeImg} alt='' />
        <div className='grid-global'>
          <div className='container-home'>
          <div className='middle'>
            <div className='left_part'>

              <div className='top_part'>
                <p>(SOCIAL MEDIA)</p>
              </div>

              <div className='bottom_part'>
                <a href='https://www.instagram.com/revelatio.studio/' target='blank'><p>INSTAGRAM</p></a>
                <a href='https://www.behance.net/revelatiostudio' target='blank'><p>BEHANCE</p></a>
              </div>

            </div>

            <div className='right_part'>
              <div className='time_text'>
                <p>(CURRENTLY TIME)</p>
              </div>

              <div className='time'>
                <p><a>RECIFE,BR</a> [{horaRecife}]</p>
                <p><a>LOCAL,{idioma}</a> [{horaLocal}]</p>

              </div>

            </div>


          </div>

          <div className='img_revelatio'>
            <img src={revelatio} alt='' />

          </div>

          </div>

        </div>

      </section>
      <Solucoes />
      <Services />
      <ScrollCases/>
      <AboutHome />
      <Ideias />
      <Ambiente />
      <BottomHome />

    </section>

  )
}

export default Transition(Home)
