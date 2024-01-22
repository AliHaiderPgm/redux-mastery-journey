import { useDispatch } from "react-redux"

export const filterTodos = (todos = [], filter = 'SHOW_ALL') => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'ACTIVE':
            return todos.filter(i => i.completed === false)
        case 'COMPLETED':
            return todos.filter(i => i.completed === true)
        default:
            return todos
    }
}