import React from 'react'
import './services.css'

import prop from '../../../../assets/img/home/prop.png'

export default function Services() {

  // todas essas partes comentadas sao funçoes para a animacao futura;**
  return (
    <div className='grid'>
      {/* <div className='image_service'>
        <img src={image} alt='' />
      </div> */}

      <div className='container'>
        {/* <div className='service_logo'>
          <img src={logo_service} alt='' />
        </div> */}





        <div className='images_services'>


          <div className='lista_images'
          // onMouseEnter={() => {
          //   setHover(1)
          // }}
          >
            <h1>+04</h1>
            <div className='images'>
              <img src={prop} alt='' />
            </div>
            <div className='text_solutions'>
              <p>Anos gerando soluções</p>
              <p>criativas para o mercado</p>
            </div>

          </div>


          <div className='lista_images'
          // onMouseEnter={() => {
          //   setHover(2)
          // }}


          >
            <h1>+05</h1>
            <div className='text_solutions'>
              <p>Países em que nosso</p>
              <p>trabalho está presente</p>
            </div>
          </div>
          <div className='lista_images'
          // onMouseEnter={() => setHover(3)}
          >
            <h1>+27</h1>
            <div className='text_solutions'>
              <p>Projetos com destaque e </p>
              <p>reconhecimento internacional</p>
            </div>
          </div>
          <div className='lista_images'
          // onMouseEnter={() => setHover(4)}
          >
            <h1>+200</h1>
            <div className='text_solutions'>
              <p>Projetos realizados ao  </p>
              <p>redor do mundo</p>
            </div>
          </div>

        </div>



      </div>

    </div>
  )
}
