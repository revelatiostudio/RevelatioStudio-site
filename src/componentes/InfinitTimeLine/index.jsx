import React from 'react'
import './infinit.css'

import frame1 from '../../assets/img/about/infinittimeline/frame1.png'
import frame2 from '../../assets/img/about/infinittimeline/frame2.png'
import frame3 from '../../assets/img/about/infinittimeline/frame3.png'
import frame4 from '../../assets/img/about/infinittimeline/frame4.png'
import frame5 from '../../assets/img/about/infinittimeline/frame5.png'

export default function InfinitTimeLine() {
  return (
    <section className='container-timeline'>
      <div className='timeline'>
        <div className='itemLeft item1'><img src={frame1} alt='' /></div>
        <div className='itemLeft item2'><img src={frame2} alt='' /></div>
        <div className='itemLeft item3'><img src={frame3} alt='' /></div>
        <div className='itemLeft item4'><img src={frame4} alt='' /></div>
        <div className='itemLeft item5'><img src={frame5} alt='' /></div>
        <div className='itemLeft item6'><img src={frame1} alt='' /></div>
        <div className='itemLeft item7'><img src={frame2} alt='' /></div>
        <div className='itemLeft item8'><img src={frame3} alt='' /></div>
        <div className='itemLeft item9'><img src={frame4} alt='' /></div>
        <div className='itemLeft item10'><img src={frame5} alt='' /></div>
      </div>   
      <div className='timeline'>
        <div className='itemRight item1'><img src={frame1} alt='' /></div>
        <div className='itemRight item2'><img src={frame2} alt='' /></div>
        <div className='itemRight item3'><img src={frame3} alt='' /></div>
        <div className='itemRight item4'><img src={frame4} alt='' /></div>
        <div className='itemRight item5'><img src={frame5} alt='' /></div>
        <div className='itemRight item6'><img src={frame1} alt='' /></div>
        <div className='itemRight item7'><img src={frame2} alt='' /></div>
        <div className='itemRight item8'><img src={frame3} alt='' /></div>
        <div className='itemRight item9'><img src={frame4} alt='' /></div>
        <div className='itemRight item10'><img src={frame5} alt='' /></div>
      </div>     
    </section>
  )
}
