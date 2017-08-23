import { createSelector } from 'reselect'

const selectUsersSubstate = state => state.users

export const selectError = createSelector(selectUsersSubstate, u => u.error)

export const selectUsers = createSelector(selectUsersSubstate, u => u.data)

export const selectLoading = createSelector(selectUsersSubstate, u => u.loading)

export const selectLoaded = createSelector(selectUsersSubstate, u => u.loaded)
