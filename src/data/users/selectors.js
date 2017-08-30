import { createSelector } from 'reselect'

const selectUsersSubstate = state => state.users

export const selectError = createSelector(selectUsersSubstate, users => users.error)

export const selectUsers = createSelector(selectUsersSubstate, users => users.data)

export const selectLoading = createSelector(selectUsersSubstate, users => users.loading)

export const selectLoaded = createSelector(selectUsersSubstate, users => users.loaded)
