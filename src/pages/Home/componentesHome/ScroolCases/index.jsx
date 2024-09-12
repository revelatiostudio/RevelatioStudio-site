import React from 'react'
import './scroolcases.css'

import case1 from '../../../../assets/img/home/cases/case1.png'

export default function ScroolCases() {
    return (
        <div className='grid'>
            <section className='cases-scrool'>

                <div className='middle-text'>
                    <h1>Nossos Cases</h1>
                </div>

                <div className='case-1'>
                    <img src={case1} alt='' />
                </div>
                <div className='case-1'>
                    <img src={case1} alt='' />
                </div>
                <div className='case-1'>
                    <img src={case1} alt='' />
                </div>




            </section>
        </div>
    )
}
