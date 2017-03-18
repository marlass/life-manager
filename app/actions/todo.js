import { ADD_TODO, REMOVE_TODO } from './../types'

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function removeTodo(todo) {
    return {
        type:REMOVE_TODO,
        payload: todo
    }
}
