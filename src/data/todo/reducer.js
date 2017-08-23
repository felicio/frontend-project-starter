import { ADD_TODO } from './constants'

const initialState = ['a', 'b', 'c']

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return state.concat(action.payload)
    default:
      return state
  }
}

export default reducer