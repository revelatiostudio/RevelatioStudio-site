import React, { useRef, useState } from 'react'
import './fundadores.css'

import Arthur from '../../../../assets/img/about/Arthur.png'
import Icaro from '../../../../assets/img/about/Icaro.png'
import Lucas from '../../../../assets/img/about/Lucas.png'

import { motion } from "framer-motion"
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react'



export default function Fundadores() {
    const [imageHover, setImageHover] = useState(0)
    const icaroRef = useRef(null);
    const arthurRef = useRef(null);
    const lucasRef = useRef(null);
    const anotherref = useRef(null);

    const images = [
        { id: 1, image: Icaro },
        { id: 2, image: Arthur },
        { id: 3, image: Lucas }

    ];




    const handleMouseEnter = (id) => {
        setImageHover(id)
        const otherImages = document.querySelectorAll(`.fund-img img:not(.image-${id})`);
        gsap.to(otherImages, { opacity: 0.1, filter: 'blur(5px)', duration: 0.5 });
        if (id === 1) {
            gsap.to(icaroRef.current, { opacity: 1, duration: 0.5 });
        } else if (id === 2) {
            gsap.to(arthurRef.current, { opacity: 1, duration: 0.5 });
        } else if (id === 3) {
            gsap.to(lucasRef.current, { opacity: 1, duration: 0.5 });

        }


        gsap.to(anotherref.current, { opacity: 0, duration: 0.5, delay: 0.2 });



    };


    const handleMouseLeave = () => {
        const tl = gsap.timeline();
        gsap.to('.fund-img img', { opacity: 1, filter: 'blur(0px)', duration: 0.5 });
        setImageHover(0);

        gsap.to(icaroRef.current, { opacity: 0, duration: 0.2 });
        gsap.to(arthurRef.current, { opacity: 0, duration: 0.2 });
        gsap.to(lucasRef.current, { opacity: 0, duration: 0.2 });


        gsap.to(anotherref.current, { opacity: 1, duration: 0.5, delay:0.5 });


    };


    return (
        <section className='container-fund'>
            <div className='grid-global'>
                <div className='fund-name'>
                    
                        <div className='fundadores' ref={anotherref}>
                            <h2>Fundadores</h2>
                            <p>Fundadores Revelatio Studios</p>
                        </div>

                        <div className='fund-name icaro' ref={icaroRef} style={{ opacity: 0 }}>
                            <h2>Icaro</h2>
                            <p>Descrição do Icaro aqui.</p>
                        </div>

                        <div className='fund-name arthur' ref={arthurRef} style={{ opacity: 0 }}>
                            <h2>Arthur Galvão</h2>
                            <p>Chief Brand Officer no Revelatio Studio®...</p>
                        </div>

                        <div className= 'fund-name lucas'ref={lucasRef} style={{ opacity: 0 }}>
                            <h2>Lucas</h2>
                            <p>Descrição do Lucas aqui.</p>
                        </div>

                   


                </div>
                <div className='fund-img'>
                    {
                        images.map((image) => (
                            <motion.img
                                key={image.id}
                                src={image.image} alt=''
                                className={`image-${image.id}`}
                                onMouseEnter={() => handleMouseEnter(image.id)}
                                onMouseLeave={handleMouseLeave}
                                initial={{ opacity: 1, filter: 'blur(0px)' }}
                                whileHover={{ scale: 1.1, opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 0.5 }}


                            />
                        ))
                    }



                </div>

            </div>

        </section>

    )
}
