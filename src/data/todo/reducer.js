import { ADD_TODO } from './constants'
import { append } from 'ramda'


const initialState = ['a', 'b', 'c']

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return append(action.payload, state)
    default:
      return state
  }
}

export default reducer
