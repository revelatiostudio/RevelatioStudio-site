import React from 'react'
import './projectsfeedback.css'
import feedback1 from '../../../../assets/img/about/feedback1.png'
import arthurMedeiros from '../../../../assets/img/about/arthur-medeiros.png'
import setaEsquerda from '../../../../assets/img/about/setaEsc.svg'
import setaDireita from '../../../../assets/img/about/setaDir.svg'
import { Progress } from "@nextui-org/react";

export default function ProjectsFeedBack() {
  return (
    <div className='grid-global'>
      <section className='project-feedback'>



        <div className='img-project'>
          <img src={feedback1} alt='projeto1' />

        </div>

        <div className='feedback'>
          <div className='people-description'>
            <div className='people-img'>
              <img src={arthurMedeiros} alt='Arthur Medeiros imagem' />

            </div>
            <div className='people-name'>
              <p>Arthur Medeiros</p>
              <p><span>Brand director - Atho Studio</span></p>

            </div>

          </div>

          <div className='descri'>
            <p>Go further into Planet Earth’s most out-there <br />
              playgrounds with technical gear designed for  <br />
              mixed terrains and trails. Engineered with highly  <br />
              durable yet comfortable fabrics that combine the  <br />
              incredible properties of soft touch, sweat-wicking <br />
              and breathable materials with the toughness to  <br />
              keep going as long as you can. Wild times await.</p>

          </div>

          <div className='change-slide'>
            <div className='bar'>
              <Progress classNames={{
                base: 'h-[0.1rem]'

              }}
                size="sm" aria-label="Loading..."
                color="default" value={10} radius='none' minValue={0} maxValue={100} valueLabel={10}
              />

            </div>
            <div className='setas'>
              <img src={setaEsquerda} alt='' />
              <img src={setaDireita} alt='' />

            </div>

          </div>

        </div>

      </section>
    </div>
  )
}
