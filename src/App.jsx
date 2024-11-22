import Home from './pages/Home'
import About from './pages/About'
import gsap from 'gsap'
import { ReactLenis } from 'lenis/react'

import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import NavBar from './componentes/NavBar'
import { AnimatePresence } from 'framer-motion'
import { useGSAP } from '@gsap/react'


function App() {

  const location = useLocation();
  const lenisRef = useRef()

  let navColor = "white";
  if (location.pathname === "/about") {
    navColor = "black"
  }

  useGSAP(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    // return () => gsap.ticker.remove(update)
  }, [])



  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000)

  }, [location]);




  return (
    <>
      <div className='grid-global'>
        <NavBar color={navColor} />
      </div>

      <ReactLenis root options={{autoRaf:false, smoothWheel: true, syncTouch:true, syncTouchLerp:0.020}} ref={lenisRef}>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>

        </AnimatePresence>

      </ReactLenis>



    </>
  )
}

export default App
