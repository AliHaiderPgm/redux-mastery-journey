import viteLogo from "/vite.svg"
import reactLogo from "/react.svg"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { addTodo, updateTodo } from "../redux/slices/todo"

const Home = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    // const [todos, setTodos] = useState([])

    const todos = useSelector((state) => state.todo)
    // setTodos(res)
    // const getTodos = () => {
    // }
    // useEffect(() => {
    //     getTodos()
    // }, [])

    const handleChange = (e) => { setText(e.target.value) }
    const handleAddTodo = (e) => {
        e.preventDefault()
        dispatch(addTodo({ title: text }))
        setText("")
    }
    const handleCheckBox = (e) => {
        dispatch(updateTodo({ id: e.id, completed: !e.completed }))
    }
    const handleActiveTodo = () => {
        todos.filter(i => i.completed === true)
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
                                <input className="form-check-input me-1" type="checkbox" id="todo" onChange={() => handleCheckBox(item)} />
                                <label className="form-check-label" htmlFor="todo">{item.title}</label>
                            </li>
                        })}
                    </ul> : null
                }
            </div>
            <div className="d-flex gap-3">
                <button>Show All</button>
                <button onClick={handleActiveTodo}>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

export default Home