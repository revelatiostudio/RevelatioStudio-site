import './services.css'
import { motion } from "framer-motion"

export default function Services() {
  return (
    <section className="container-services">
      <div className='grid-global'>
        <div className='container-services'>





          <motion.div
           className='service'
           layout
           initial={{ height: window.innerWidth >= 601 ? "70px" : "40px" }}
           animate={{ height: window.innerWidth >= 601 ? "70px" : "40px" }}
           //whileHover={{ height: window.innerWidth >= 601 ? "223px" : "110px" }}
           onTapStart={{height: window.innerWidth >= 601 ? "223px" : "110px" }}
           //whileTap={{ height: window.innerWidth >= 601 ? "223px" : "110px" }}
           //transition={{ type: "spring", stiffness: 200 }}
          >
            <div className='bullets'>
              <p>Jornada</p>
            </div>
            <div className='points'>

              <div className='t1'>
                <p>Anos de Mercado</p>
              </div>

              <div className='t2'>
                <h1>04</h1>
              </div>
            </div>
          </motion.div>



          <motion.div 
          className='service'
          layout
          initial={{ height: window.innerWidth >= 601 ? "70px" : "40px" }}
          animate={{ height: window.innerWidth >= 601 ? "70px" : "40px" }}
          whileHover={{ height: window.innerWidth >= 601 ? "223px" : "110px" }}
          whileTap={{ height: window.innerWidth >= 601 ? "223px" : "110px" }}
          transition={{ type: "spring", stiffness: 200 }}
          >
            <div className='bullets'>
              <p>Experiência</p>
            </div>
            <div className='points'>
              <div className='t1'>
                <p>Projetos Realizados</p>
              </div>

              <div className='t2'>
                <h1>+300</h1>
              </div>

            </div>
          </motion.div>

          <motion.div  
          className='service'
          layout
          initial={{ height: window.innerWidth >= 601 ? "70px" : "40px" }}
          animate={{ height: window.innerWidth >= 601 ? "70px" : "40px" }}
          whileHover={{ height: window.innerWidth >= 601 ? "223px" : "110px" }}
          whileTap={{ height: window.innerWidth >= 601 ? "223px" : "110px" }}
          transition={{ type: "spring", stiffness: 200 }}
          >
            <div className='bullets'>
              <p>Impacto</p>
            </div>
            <div className='points'>
             <div className='t1'>
              <p>Atuação Global</p>
             </div>
              <div className='t2'>
                <h1>06</h1>
              </div>
            </div>
          </motion.div >

          <motion.div  
          className='service'
          layout
          initial={{ height: window.innerWidth >= 601 ? "70px" : "40px" }}
          animate={{ height: window.innerWidth >= 601 ? "70px" : "40px" }}
          whileHover={{ height: window.innerWidth >= 601 ? "223px" : "110px" }}
          whileTap={{ height: window.innerWidth >= 601 ? "223px" : "110px" }}
          transition={{ type: "spring", stiffness: 200 }}
          >
            <div className='bullets'>
              <p>Chancela</p>
            </div>
            <div className='points'>
              <div className='t1'>
                <p>Reconhecimentos Internacionais</p>
              </div>
              <div className='t2'>
                <h1>33</h1>
              </div>
            </div>
          </motion.div>


        </div>

      </div>
    </section>
  )
}