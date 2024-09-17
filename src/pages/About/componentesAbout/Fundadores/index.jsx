import React, { useState } from 'react'
import './fundadores.css'

import Arthur from '../../../../assets/img/about/Arthur.png'
import Icaro from '../../../../assets/img/about/Icaro.png'
import Lucas from '../../../../assets/img/about/Lucas.png'

import { motion } from "framer-motion"
import { gsap } from "gsap";



export default function Fundadores() {
    const [imageHover, setImageHover] = useState(0)

    const images = [
        { id: '1', image: Icaro },
        { id: '2', image: Arthur },
        { id: '3', image: Lucas }

    ];



    const handleMouseEnter = (id) => {
        setImageHover(id)
        const otherImages = document.querySelectorAll(`.socios-img img:not(.image-${id})`);
        gsap.to(otherImages, { opacity: 0.1, filter: 'blur(5px)', duration: 0.5 });
    };

    const handleMouseLeave = () => {
        gsap.to('.socios-img img', { opacity: 1, filter: 'blur(0px)', duration: 0.5 });
    };


    return (
        <section className='container-fund'>
            <div className='grid-global'>
                <div className='socio-name'>
                    <h2>Fundadores</h2>
                    <div>
                        <p>Fundadores Revelatio Studios</p>
                    </div>
                </div>
                <div className='socios-img'>
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
