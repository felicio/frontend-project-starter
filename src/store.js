import { compose, createStore, combineReducers } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import todoReducer from './data/todo/reducer'
import userReducer from './data/users/reducer'


const rootReducer = combineReducers({
  todos: todoReducer,
  users: userReducer,
})

const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  autoRehydrate(),
)

persistStore(store)

export default store