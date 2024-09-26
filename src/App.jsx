import Home from './pages/Home'
import About from './pages/About'
import NavBar from './componentes/NavBar'
import Lenis from '@studio-freight/lenis'

import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'


function App() {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  const lenis = new Lenis()


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </>
  )
}

export default App
