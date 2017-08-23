import { ADD_TODO } from './constants'


export const addTodo = text => ({
  type: ADD_TODO,
  payload: text,
})
