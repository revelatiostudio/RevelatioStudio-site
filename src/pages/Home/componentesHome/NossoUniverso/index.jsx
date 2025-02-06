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
                end: () => "+=" + container.offsetHeight * 1,
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
        }, 0)



        tl.to(".container-nosso-universo h1", {
            transformOrigin: "48% 50%",
            scale: 500,
            stagger: 0.25,
            duration: 2,
            ease: "expo.in",
        })






    }

   
    function separaLetrasTablet() {
        const container = nossouniversoRef.current
        const title = new SplitType(".container-nosso-universo h1", { types: 'words, chars' })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".container-nosso-universo",
                end: () => "+=" + container.offsetHeight * 1,
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
        }, 0).to(".container-nosso-universo h1", {
            transformOrigin: "48% 50%",
            scale: 500,
            duration: 2,
            fontSize: "52px",
            ease: "expo.in",
        })




    }
    function separaLetrasMobile() {
        const container = nossouniversoRef.current
        const title = new SplitType(".container-nosso-universo h1", { types: 'words, chars' })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".container-nosso-universo",
                end: () => "+=" + container.offsetHeight * 1,
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
        }, 0)


        tl.to(".container-nosso-universo h1", {
            transformOrigin: "46.5% 50%",
            scale: 600,
            duration: 2,
            ease: "expo.in",
        })




    }




    useGSAP(() => {
        if (window.innerWidth <= 480) {
            console.log("mobile")
            separaLetrasMobile()
        } else if (window.innerWidth <= 991) {
            console.log("tablet")
            separaLetrasTablet()
        }
        else if (window.innerWidth >= 1150) {
            console.log("desktop")
            separaLetrasDesktop()
        }


    }, [])


    return (
        <section className='container-nosso-universo' ref={nossouniversoRef}>
            <h1>NOSSO  UNIVERSO</h1>

        </section>
    )
}