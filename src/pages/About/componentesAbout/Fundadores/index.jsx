import React, { useRef, useState } from 'react'
import './fundadores.css'

import Arthur from '../../../../assets/img/about/Arthur.png'
import Icaro from '../../../../assets/img/about/Icaro.png'
import Lucas from '../../../../assets/img/about/Lucas.png'

import { motion } from "framer-motion"
import { gsap } from "gsap";



export default function Fundadores() {
    const [imageHover, setImageHover] = useState(0)
    const icaroRef = useRef(null);
    const arthurRef = useRef(null);
    const lucasRef = useRef(null);
    const anotherref = useRef(null);

    const images = [
        { id: 1, image: Icaro, name: "Ícaro de Souza", des1: "Co-founder", des2: "& CBO" },
        { id: 2, image: Arthur, name: "Arthur Galvao", des1: "Co-founder", des2: "& COO" },
        { id: 3, image: Lucas, name: "Lucas Lavor", des1: "Co-founder", des2: "& CTO" }

    ];


    const handleMouseEnter = (id) => {

        gsap.killTweensOf('.socios-img img');
        setImageHover(id)

        const otherImages = document.querySelectorAll(`.fund-img img:not(.image-${id})`);
        const otherText = document.querySelectorAll(`.founder:not(:has(.class-blour-${id}))`);

        gsap.to(otherImages, { opacity: 0.1, filter: 'blur(5px)', duration: 0.5 });
        gsap.to(otherText, { opacity: 0.5, filter: 'blur(4px)', duration: 0.5 });

        if (id === 1) {
            gsap.to(icaroRef.current, { opacity: 1, duration: 0.5, overwrite: true });
        } else if (id === 2) {
            gsap.to(arthurRef.current, { opacity: 1, duration: 0.5, overwrite: true });
        } else if (id === 3) {
            gsap.to(lucasRef.current, { opacity: 1, duration: 0.5, overwrite: true });

        }


        gsap.to(anotherref.current, { opacity: 0, duration: 0.5, delay: 0.2, overwrite: true });


    };


    const handleMouseLeave = () => {
        gsap.killTweensOf('.socios-img img');

        const tl = gsap.timeline();
        gsap.to('.fund-img img', { opacity: 1, filter: 'blur(0px)', duration: 0.5 });
        gsap.to('.founder', { opacity: 1, filter: 'blur(0px)', duration: 0.5 });
        setImageHover(0);

        gsap.to([icaroRef.current, arthurRef.current, lucasRef.current], { opacity: 0, duration: 0.2, overwrite: true });


        gsap.to(anotherref.current, { opacity: 1, duration: 0.5, delay: 0.5, overwrite: true });


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
                        <h2>Ícaro de Souza</h2>
                        <p>Chief Operations Officer no Revelatio <br />
                            Studio®, focado em toda estratégia, <br />
                            <br />
                            gestão e criação visual dos projetos,<br />
                            especialista em vendas e comunicação.</p>
                    </div>

                    <div className='fund-name arthur' ref={arthurRef} style={{ opacity: 0 }}>
                        <h2>Arthur Galvão</h2>
                        <p>Chief Brand Officer no Revelatio Studio®. <br />
                            Lidera os projetos de marca do estúdio. <br />
                            <br />
                            Designer especialista em Branding, <br />
                            focado nas áreas de naming, estratégia <br />
                            de marca e identidade visual.</p>
                    </div>

                    <div className='fund-name lucas' ref={lucasRef} style={{ opacity: 0 }}>
                        <h2>Lucas Lavor</h2>
                        <p>Chief Technology Officer no Revelatio <br />
                            Studio®. Desenvolvedor fullstack com <br />
                            <br />
                            ênfase em webdesign e apps. Lidera <br />
                            iniciativas tecnológicas e assegura a <br />
                            excelência em todos os projetos.
                        </p>
                    </div>




                </div>
                <div className='fund-img'>
                    {images.map((image) => (
                        <motion.div
                            key={image.id}
                            className='one-founder'
                            initial={{ opacity: 1, filter: 'blur(0px)' }}
                            whileHover={{ scale: 1.1, opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5 }}>

                            <motion.img
                                src={image.image} alt=''
                                className={`image-${image.id}`}
                                onMouseEnter={() => handleMouseEnter(image.id)}
                                onMouseLeave={handleMouseLeave}
                            />
                            <div className={"founder"}>

                                <p className={`class-blour-${image.id}`}>{image.name}</p>
                                <div className='description'>
                                    <div className='name-text-mobile'>
                                        <p><span>{image.des1}</span></p>
                                    </div>
                                    <div className='desc-text-mobile'>
                                        <p><span>{image.des2}</span></p>
                                    </div>
                                </div>


                            </div>



                        </motion.div>
                    ))}
                </div>

            </div>

        </section>

    )
}
