import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './constants'


export const fetchUsers = () => ({
  type: FETCH_USERS,
})

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
})

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
})
