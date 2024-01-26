import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosAsync, addAsyncTodo, deleteAsyncTodo, updateAsyncTodo } from "../../redux/slices/asyncTodos";
const Async = () => {
    const dispatch = useDispatch()
    const asyncTodos = useSelector(state => state.asyncTodos)
    const asyncTodoStatus = useSelector(state => state.asyncTodos)
    const [text, setText] = useState("")

    useEffect(() => {
        dispatch(getTodosAsync())
    }, [dispatch])

    const handleAddTodo = (e) => {
        e.preventDefault()
        dispatch(addAsyncTodo({ title: text }))
    }
    const handleCheckBox = (e, item) => {
        dispatch(updateAsyncTodo({ id: item.id, completed: e.target.checked }))
    }
    const handleDelete = (id) => {
        dispatch(deleteAsyncTodo({ id }))
    }
    return (
        <div>
            <div>
                <h1>Add Async Todo</h1>
                <div className="p-2 text-center" data-bs-theme="dark">
                    <form onSubmit={handleAddTodo}>
                        <input type="text" className="rounded form-control mb-2" onChange={e => setText(e.target.value)} value={text} />
                        <button className="text-white w-100" onClick={handleAddTodo}>Add Todo</button>
                    </form>
                </div>
            </div>
            <h3>Async Todos</h3>
            {
                asyncTodoStatus === 'loading' ? <p>Loading...</p> :
                    asyncTodos.map((state, index) => {
                        return <li className="list-group-item my-2 d-flex gap-3 align-items-center" key={state.id}>
                            <span>
                                <input className="form-check-input me-1" type="checkbox" checked={state.completed} id={state.id} onChange={(e) => handleCheckBox(e, state)} />
                                <label className="form-check-label" htmlFor={state.id}>{state.title}</label>
                            </span>
                            <button className="bg-danger" onClick={() => handleDelete(state.id)}>Delete</button>
                        </li>
                    })
            }
        </div>
    )
}

export default Async