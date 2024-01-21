import { useDispatch, useSelector } from "react-redux"
import viteLogo from "/vite.svg"
import reactLogo from "/react.svg"
import { increment, decrement } from "../redux/slices/counter"

const Home = () => {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }

    return (
        <>
            <div>
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
            <h1>Vite + React + Redux</h1>
            <div className="p-2 d-flex gap-3">
                <input type="text" className="form-control" />
                <button className="btn btn-primary form-control">Add Todo</button>
            </div>
            <div>
                <p>My Todo</p>
            </div>
            <div className="d-flex gap-3">
                <button className="btn btn-primary form-control">Show All</button>
                <button className="btn btn-primary form-control">Active</button>
                <button className="btn btn-primary form-control">Completed</button>
            </div>
        </>
    )
}

export default Home