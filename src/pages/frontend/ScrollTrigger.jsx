import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

const ScrollTriggerPage = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('.c', {
            x: 900, duration: 10, scrollTrigger: {
                trigger: '.c',
                start: "top 80%",  /*first value is related to the element where as second value is related to scrollbar position*/
                end: "top 40%",
                scrub: 3, /*pin element to scroll bar*/
                pin: true,
                // toggleActions: "reset none none none",
                // markers: true
            }
        })
        gsap.to('.d', {
            // x: 900,
            // duration: 15,
            scrollTrigger: {
                trigger: '.d',
                start: 'top 50%',
                end: 'top 10%',
                pin: true,
                scrub: 2,
                markers: true
            }
        })

        // toggleActions values
        // 1. what will happen user user scroll to that section
        // 2. what will happen when user scroll back to that section
        // 3. what will happen when user scroll back to that section e.g. if animation is paused we can run it again or reset it and so on
        // 4. when user all the way to end then what to do
    })
    return (
        <>
            <div className="d-flex flex-column justify-content-between  min-vh-100">
                <div className="a box"></div>
                <div className="b box"></div>
                <div className="c box"></div>
                <div className="d box"></div>
            </div>
            <div className="min-vh-100"></div>
        </>
    )
}

export default ScrollTriggerPage