import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './constants'
import { merge } from 'ramda'

const initialState = {
  loading: false,
  loaded: false,
  data: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return merge(state, {
        loading: true,
      })
    case FETCH_USERS_SUCCESS:
      return merge(state, {
        loading: false,
        loaded: true,
        data: action.payload,
      })
    case FETCH_USERS_FAILURE:
      return merge(state, {
        loading: false,
        loaded: false,
        error: action.payload,
      })
    default:
      return state
  }
}

export default reducer
