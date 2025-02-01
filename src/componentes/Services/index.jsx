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
            initial={{ height: "70px" }}
            animate={{ height: "70px" }}
            whileHover={{ height: "200px" }}
            transition={{ type: "spring", stiffness: 200 }}
            >
              <div className='bullets'>
                <p>Jornada</p>
              </div>
              <div className='points'>
                <p>Anos de Mercado</p>
                <h1>04</h1>
              </div>
            </motion.div>
          
          <motion.div  
          className='service'
          layout
          initial={{ height: "70px" }}
          animate={{ height: "70px" }}
          whileHover={{ height: "200px" }}
          transition={{ type: "spring", stiffness: 200 }}
          >
            <div className='bullets'>
              <p>Impacto</p>
            </div>
            <div className='points'>
              <p>Atuação Global</p>
              <h1>06</h1>
            </div>
          </motion.div >

          <motion.div  
          className='service'
          layout
          initial={{ height: "70px" }}
          animate={{ height: "70px" }}
          whileHover={{ height: "200px" }}
          transition={{ type: "spring", stiffness: 200 }}
          >
            <div className='bullets'>
              <p>Experiência</p>
            </div>
            <div className='points'>
              <p>Projetos Realizados</p>
              <h1>+300</h1>
            </div>
          </motion.div>

          <motion.div  
          className='service'
          layout
          initial={{ height: "70px" }}
          animate={{ height: "70px" }}
          whileHover={{ height: "200px" }}
          transition={{ type: "spring", stiffness: 200 }}
          >
            <div className='bullets'>
              <p>Chancela</p>
            </div>
            <div className='points'>
              <p>Reconhecimentos Internacionais</p>
              <h1>33</h1>
            </div>
          </motion.div >


        </div>

      </div>
    </section>
  )
}