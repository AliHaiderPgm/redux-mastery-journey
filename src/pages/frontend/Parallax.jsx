import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Parallax = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        gsap.to('.img', { y: 0, ease: 'none', scrollTrigger: { trigger: '.img', scrub: true } })
        gsap.to('.text', { yPercent: -200, ease: 'none', scrollTrigger: { trigger: '.text', scrub: true } })
    })
    return (
        <div>
            <div className="overflow-hidden position-relative">
                <img src="https://source.unsplash.com/random/1920x1080" className="img-fluid img" alt="" />
                <div className="position-absolute top-50 start-50 bg-white text-black p-4 rounded text">
                    <h1>One Day or Day One</h1>
                </div>
            </div>
            <p className="min-vh-100"></p>
        </div>
    )
}

export default Parallax