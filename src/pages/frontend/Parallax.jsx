import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import sky from "../../assets/sky.png"
import mountains from "../../assets/mountains.png"
import person from "../../assets/person.png"

const Parallax = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        // Example 1
        gsap.to('.img', { y: 10, ease: 'none', scrollTrigger: { trigger: '.img', scrub: true } })
        gsap.to('.text', { y: -2500, ease: 'none', scrollTrigger: { trigger: '.text', scrub: 2, end: "bottom 90%", } })
        // Example 2
        gsap.to('.sky', { y: -700, ease: 'none', scrollTrigger: { trigger: '.sky', scrub: true, start: "top 60", } })
        gsap.to('.mountain', { y: -400, ease: 'none', scrollTrigger: { trigger: '.mountain', scrub: true, start: "top 410", markers: true } })
    })
    return (
        <div>
            <h1>Example 1</h1>
            <div className="overflow-hidden position-relative">
                <img src="https://source.unsplash.com/random/1920x1080" className="img-fluid img" alt="" />
                <div className="position-absolute top-100 start-50 bg-white text-black p-4 rounded text">
                    <h1>One Day or Day One</h1>
                </div>
            </div>
            <h1>Example 2</h1>
            <div className="parallax">
                <img src={sky} alt="Sky" className="img-fluid sky" />
                <img src={mountains} alt="mountains" className="img-fluid mountain" />
                <img src={person} alt="persons standing on mountain" className="img-fluid person" />
            </div>
            <p className="min-vh-100"></p>
        </div>
    )
}

export default Parallax