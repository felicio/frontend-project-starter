import { createStore } from 'redux'
import reducer from './data/todo/reducer'


export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
