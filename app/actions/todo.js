import { ADD_TODO } from './../types'

export default function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}
