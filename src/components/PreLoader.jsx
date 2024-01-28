import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const PreLoader = () => {
    useGSAP(() => {
        gsap.to('.bar', { height: 0, stagger: 0.15, duration: 1.5, ease: 'power4.inOut', })
    })
    return (
        <div className="preLoader">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    )
}

export default PreLoader