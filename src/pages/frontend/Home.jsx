import viteLogo from "/vite.svg"
import reactLogo from "/react.svg"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"


const Home = () => {
    useGSAP(() => {
        gsap.from('.logo', { y: 15, opacity: 0, stagger: 0.2, })
        gsap.to('.react', { rotate: 360, repeat: -1, duration: 10, ease: 'sin' })
    })

    return (
        <div className="container d-flex flex-column justify-content-center home">
            <div className="text-center">
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <a href="https://redux.js.org/" target="_blank">
                    <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" className="logo redux" alt="React logo" />
                </a>
                <a href="https://redux.js.org/" target="_blank">
                    <img src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" className="logo gsap" alt="React logo" />
                </a>
            </div>
        </div>
    )
}

export default Home