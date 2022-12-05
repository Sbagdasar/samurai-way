import {Dispatch} from "redux";
import {usersAPI} from "../../api/api";

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type UserType = {
    id: number,
    photos: UserPhotosType,
    followed: boolean,
    name: string,
    status: string,
}

type UserPhotosType = {
    small: string,
    large: string
}
type FollowACType = {
    type: "FOLLOW",
    userID: number
}
type UnFollowACType = {
    type: "UNFOLLOW",
    userID: number
}
type SetUsersACType = {
    type: "SET-USERS",
    users: Array<UserType>
}
type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
type FollowingInProgressACType = ReturnType<typeof toggleFollowingInProgress>
type ActionsType =
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | ToggleIsFetchingACType
    | FollowingInProgressACType

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: true} : user)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: false} : user)
            }

        }
        case "SET-USERS": {
            return {
                ...state, users: action.users
            }
        }
        case "SET-CURRENT-PAGE": {
            return {
                ...state, currentPage: action.page
            }
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case 'TOGGLE-IS-FETCHING': {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case 'FOLLOWING-IN-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.following ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export const follow = (userID: number): FollowACType => ({
    type: "FOLLOW", userID
})
export const unFollow = (userID: number) => ({
    type: "UNFOLLOW", userID
})
export const setUsers = (users: Array<UserType>): SetUsersACType => ({
    type: "SET-USERS",
    users
})
export const setCurrentPage = (page: number) => ({
    type: "SET-CURRENT-PAGE" as const,
    page
})
export const setTotalUsersCount = (count: number) => ({
    type: "SET-TOTAL-USERS-COUNT" as const,
    count
})
export const toggleIsFetching = (isFetching: boolean) => ({
    type: "TOGGLE-IS-FETCHING" as const,
    isFetching
})
export const toggleFollowingInProgress = (userId: number, following: boolean) => ({
    type: "FOLLOWING-IN-PROGRESS" as const,
    following,
    userId
})

// thunk
export const getUsersTC = (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(pageSize, currentPage)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
}

export const followTC = (id: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(id,true))
    usersAPI.follow(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(follow(id))
        }
        dispatch(toggleFollowingInProgress(id,false))
    })
}
export const unfollowTC = (id: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(id,true))
    usersAPI.unFollow(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(unFollow(id))
        }
        dispatch(toggleFollowingInProgress(id,false))
    })
}