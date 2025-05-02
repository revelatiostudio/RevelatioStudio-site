import './nossouniverso.css'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SplitType from 'split-type'
import { useRef, useState } from 'react';

export default function NossoUniverso() {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const nossouniversoRef = useRef(null)


    function separaLetrasDesktop() {
        const container = nossouniversoRef.current
        const title = new SplitType(".container-nosso-universo h1", { types: 'words, chars' })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".container-nosso-universo",
                end: () => "+=" + container.offsetHeight * 2.5,
                markers: false,
                scrub: 0.5,
                pin: true,
                ease: "none",

            }
        })

        gsap.set(title.chars, {
            letterSpacing: "160px",
        })

        tl.to(title.chars, {
            letterSpacing: "1px",
            duration: 3,
            ease: "none",
        }).to(".container-nosso-universo h1", {
            transformOrigin: "49.3% 50%",
            scale: window.innerWidth <= 1920 ? 700 : 1000,
            stagger: 0.25,
            duration: 2,
            delay: 2,
            ease: "expo.in",
        })






    }

   
    function separaLetrasTablet() {
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
            letterSpacing: "1px",
            duration: 3,
            ease: "none",
        }, 0).to(".container-nosso-universo h1", {
            transformOrigin: "49% 50%",
            scale: 500,
            duration: 2,
            fontSize: "52px",
            ease: "expo.in",
            delay: 2,
        })




    }
    function separaLetrasMobile() {
        const container = nossouniversoRef.current
        const title = new SplitType(".container-nosso-universo h1", { types: 'words, chars' })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".container-nosso-universo",
                end: () => "+=" + container.offsetHeight * 2.5,
                markers: false,
                scrub: true,
                pin: true,
                ease: "none",

            }
        })

        gsap.set(title.chars, {
            letterSpacing: "160px",
        })

        tl.to(title.chars, {
            letterSpacing: "1px",
            duration: 3,
            ease: "none",
        }, 0)


        tl.to(".container-nosso-universo h1", {
            transformOrigin: "49% 50%",
            scale: 4,
            fontSize: "400vw",
            duration: 2,
            delay: 2,
            ease: "expo.in",
        })




    }




    useGSAP(() => {
        if (window.innerWidth <= 480) {
            separaLetrasMobile()
        } else if (window.innerWidth <= 991) {
            separaLetrasTablet()
        }
        else if (window.innerWidth >= 1150) {
            separaLetrasDesktop()
        }


    }, [])


    return (
        <section className='container-nosso-universo' ref={nossouniversoRef}>
            <h1>NOSSO  UNIVERSO</h1>

        </section>
    )
}