import viteLogo from "/vite.svg"
import reactLogo from "/react.svg"


const Home = () => {

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
            </div>
            <h1 className="text-center">Vite + React + Redux</h1>
        </div>
    )
}

export default Home