import Home from './pages/Home'
import About from './pages/About'
import Lenis from '@studio-freight/lenis'

import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import NavBar from './componentes/NavBar'
import { AnimatePresence } from 'framer-motion'


function App() {

  const location = useLocation();

  let navColor = "white";
  if (location.pathname === "/about") {
    navColor = "black"
  }


  const lenis = new Lenis()


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // useEffect(() => {
  //     setTimeout(() => {
  //         window.scrollTo(0, 0);
  //     },1000)
      
  //   }, [location]);




  return (
    <>
      <div className='grid-global'>
        <NavBar color={navColor} />
      </div>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>

      </AnimatePresence>


    </>
  )
}

export default App
