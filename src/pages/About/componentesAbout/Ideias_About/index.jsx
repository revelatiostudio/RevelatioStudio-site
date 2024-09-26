import React from 'react'
import './ideias_about.css'

import Ideias from '../../../../componentes/Ideias'

export default function Ideias_About() {
  return (
    <section>
      <div className='grid-global'>
        <div className='only'>
          <h1> O que nos <br />faz únicos?</h1>
          <div>
            <p>Nossa constante expansão de referências é um reflexo <br />
              da nossa <span>imersão contínua</span> no universo em que atuamos. <br />
              <span>Estamos sempre inquietos</span>, buscando as melhores soluções <br />
              para pessoas, marcas e negócios. A <span>idoneidade é o alicerce</span> que <br />
              sustenta todos os nossos processos, parceiros e colaboradores.</p>
          </div>
        </div>
      </div>
      <Ideias color='white-ideias' />
    </section>

  )
}
