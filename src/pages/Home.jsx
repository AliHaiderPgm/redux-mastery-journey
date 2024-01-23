import viteLogo from "/vite.svg"
import reactLogo from "/react.svg"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { addTodo, updateTodo } from "../redux/slices/todo"
import { filterTodos } from "../components/FilterTodos"

const Home = () => {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState('SHOW_ALL')

    const dispatch = useDispatch()
    const res = useSelector((state) => state.todo)

    useEffect(() => { setTodos(filterTodos(res, filter)) }, [res, filter])

    const handleChange = (e) => setText(e.target.value)
    const handleFilter = (e) => setFilter(e)

    const handleAddTodo = (e) => {
        e.preventDefault()
        if (!text) {
            return
        }
        dispatch(addTodo({ title: text }))
        setText("")
    }
    const handleCheckBox = (e, item) => {
        dispatch(updateTodo({ id: item.id, completed: e.target.checked }))
    }
    return (
        <div className="container d-flex flex-column justify-content-center min-vh-100">
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
            <h3 className="text-center">Vite + React + Redux</h3>
            <h1 className="text-center">Add Todo</h1>
            <div className="p-2 text-center" data-bs-theme="dark">
                <form onSubmit={handleAddTodo}>
                    <input type="text" className="rounded form-control mb-2" onChange={handleChange} value={text} />
                    <button className="text-white w-25" onClick={handleAddTodo}>Add Todo</button>
                </form>
            </div>
            <div className="p-4">
                <h2>My Todo</h2>
                {
                    todos.length == 0 ? <p>No Todo.</p> : null
                }
                {
                    todos?.length > 0 ? <ul className="list-group bg-custom-black" data-bs-theme="dark">
                        {todos.map((item, index) => {
                            return <li className="list-group-item" key={index}>
                                <input className="form-check-input me-1" type="checkbox" checked={item.completed} id={item.id} onChange={(e) => handleCheckBox(e, item)} />
                                <label className="form-check-label" htmlFor={item.id}>{item.title}</label>
                            </li>
                        })}
                    </ul> : null
                }
            </div>
            <div className="d-flex gap-3">
                <button className={`${filter === 'SHOW_ALL' ? 'active' : ''}`} onClick={() => handleFilter('SHOW_ALL')}>Show All</button>
                <button className={`${filter === 'ACTIVE' ? 'active' : ''}`} onClick={() => handleFilter('ACTIVE')}>Active</button>
                <button className={`${filter === 'COMPLETED' ? 'active' : ''}`} onClick={() => handleFilter('COMPLETED')}>Completed</button>
            </div>
        </div>
    )
}

export default Home