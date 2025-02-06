import './nossouniverso.css'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SplitType from 'split-type'
import { useRef, useState } from 'react';

export default function NossoUniverso() {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const nossouniversoRef = useRef(null)
    const [escala, setEscala] = useState(1)


    function separaLetras() {
        const container = nossouniversoRef.current
        const title = new SplitType(".container-nosso-universo h1", { types: 'words, chars' })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".container-nosso-universo",
                end: () => "+=" + container.offsetHeight * 2.5,
                markers: false,
                scrub: 1,
                pin: true,
                ease: "none",

            }
        })

        gsap.set(title.chars, {
            letterSpacing: "160px",
        })

        tl.to(title.chars, {
            letterSpacing: "5px",
            duration: 3,
            ease: "none",
        }).to(".container-nosso-universo h1", {
            transformOrigin: "48% 50%",
            scale: 500,
            stagger: 0.25,
            duration: 2,
            ease: "expo.in",
        })







    }

    useGSAP(() => {
        separaLetras()
    }, [])


    return (
        <section className='container-nosso-universo' ref={nossouniversoRef}>
            <h1>NOSSO  UNIVERSO</h1>

        </section>
    )
}