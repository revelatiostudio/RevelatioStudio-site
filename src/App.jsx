import Home from './pages/Home'
import About from './pages/About'
import NavBar from './componentes/NavBar'
import Lenis from '@studio-freight/lenis'

import { Route, Routes } from 'react-router-dom'


function App() {
  const lenis = new Lenis({
    lerp: 0.06
  })


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
