import { createStore, combineReducers } from 'redux'
import todoReducer from './data/todo/reducer'
import userReducer from './data/users/reducer'


const rootReducer = combineReducers({
  todos: todoReducer,
  users: userReducer,
})

export default createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
