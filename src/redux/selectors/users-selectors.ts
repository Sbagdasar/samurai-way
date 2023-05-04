import {createSelector} from "reselect";
import {RootTypeReduxState} from "../redux-store";
// selectors
const getUsersSelector = (state: RootTypeReduxState) => {
  return state.usersPage.users
}
const getPageSizeSelector = (state: RootTypeReduxState) => {
  return state.usersPage.pageSize
}

const getTotalUsersCountSelector = (state: RootTypeReduxState) => {
  return state.usersPage.totalUsersCount
}

const getCurrentPageSelector = (state: RootTypeReduxState) => {
  return state.usersPage.currentPage
}

const getIsFetchingSelector = (state: RootTypeReduxState) => {
  return state.usersPage.isFetching
}

const getFollowingInProgressSelector = (state: RootTypeReduxState) => {
  return state.usersPage.followingInProgress
}
//reselect selectors
export const getUsers = createSelector(getUsersSelector, (users) => {
  return users
})
export const getPageSize = createSelector(getPageSizeSelector, (pageSize) => {
  return pageSize
})

export const getTotalUsersCount = createSelector(getTotalUsersCountSelector, (usersCount) => {
  return usersCount
})

export const getCurrentPage = createSelector(getCurrentPageSelector, (page) => {
  return page
})

export const getIsFetching = createSelector(getIsFetchingSelector, (isFetching) => {
  return isFetching
})

export const getFollowingInProgress = createSelector(getFollowingInProgressSelector, (following) => {
  return following
})

