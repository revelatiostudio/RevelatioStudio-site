import Home from './pages/Home'
import About from './pages/About'
import Lenis from '@studio-freight/lenis'

import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import NavBar from './componentes/NavBar'


function App() {

  // const location = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);

  const location = useLocation();

  let navColor = "white";
  if(location.pathname === "/about"){
    navColor = "black"
  }


  const lenis = new Lenis()


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <>
    <div className='grid-global'>
    <NavBar color={navColor}/>

    </div>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </>
  )
}

export default App
