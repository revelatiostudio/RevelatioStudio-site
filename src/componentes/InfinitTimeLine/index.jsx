import React from 'react'
import './infinit.css'

import frame1 from '../../assets/img/about/infinittimeline/frame1.png'
import frame2 from '../../assets/img/about/infinittimeline/frame2.png'
import frame3 from '../../assets/img/about/infinittimeline/frame3.png'
import frame4 from '../../assets/img/about/infinittimeline/frame4.png'
import frame5 from '../../assets/img/about/infinittimeline/frame5.png'

export default function InfinitTimeLine() {
  const imgsFrames = [frame1, frame2, frame3, frame4, frame5, frame1, frame2, frame3, frame4, frame5]
  return (
    <section className='container-timeline'>
      <div className='container-blour'></div>

      <div className='timeline'>
        {
          imgsFrames.map((frame, index) => (
            <div className={`itemLeft item${index}`}><img src={frame} alt='' /></div>

          ))

        }

      </div>
      <div className='timeline'>
        {
          imgsFrames.map((frame, index) => (
            <div className={`itemRight item${index}`}><img src={frame} alt='' /></div>

          ))

        }
      </div>
      <div className='container-blour right'></div>
    </section>
  )
}
