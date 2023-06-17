import {Dispatch} from "redux";
import {usersAPI} from "../../api/api";
import {ActionTypes} from "redux-form";
import {updateObjectInArray} from "../../utils/helpers/objectsMapping";

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
    type: "USERS/FOLLOW",
    userID: number
}
type UnFollowACType = {
    type: "USERS/UNFOLLOW",
    userID: number
}
type SetUsersACType = {
    type: "USERS/SET-USERS",
    users: Array<UserType>
}
type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
type FollowingInProgressACType = ReturnType<typeof toggleFollowingInProgress>
export type UsersActionsType =
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | ToggleIsFetchingACType
    | FollowingInProgressACType

export const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case "USERS/FOLLOW": {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
            }
        }
        case "USERS/UNFOLLOW": {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
            }

        }
        case "USERS/SET-USERS": {
            return {
                ...state, users: action.users
            }
        }
        case "USERS/SET-CURRENT-PAGE": {
            return {
                ...state, currentPage: action.page
            }
        }
        case "USERS/SET-TOTAL-USERS-COUNT": {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case 'USERS/TOGGLE-IS-FETCHING': {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case 'USERS/FOLLOWING-IN-PROGRESS': {
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
    type: "USERS/FOLLOW", userID
})
export const unFollow = (userID: number) => ({
    type: "USERS/UNFOLLOW", userID
})
export const setUsers = (users: Array<UserType>): SetUsersACType => ({
    type: "USERS/SET-USERS",
    users
})
export const setCurrentPage = (page: number) => ({
    type: "USERS/SET-CURRENT-PAGE" as const,
    page
})
export const setTotalUsersCount = (count: number) => ({
    type: "USERS/SET-TOTAL-USERS-COUNT" as const,
    count
})
export const toggleIsFetching = (isFetching: boolean) => ({
    type: "USERS/TOGGLE-IS-FETCHING" as const,
    isFetching
})
export const toggleFollowingInProgress = (userId: number, following: boolean) => ({
    type: "USERS/FOLLOWING-IN-PROGRESS" as const,
    following,
    userId
})

// thunk
export const getUsersTC = (pageSize: number, page: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    let data = await usersAPI.getUsers(pageSize, page)
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
}
const followUnfollowFlow = async (dispatch:Dispatch, id:number, apiMethod:(id:number)=>Promise<any>, actionCreator:any) => {
    dispatch(toggleFollowingInProgress(id,true))
    let data = await apiMethod(id)
        if (data.resultCode === 0) {
            dispatch(actionCreator(id))
        }
        dispatch(toggleFollowingInProgress(id,false))

}
export const followTC = (id: number) => (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI), follow)

}
export const unfollowTC = (id: number) => (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.unFollow.bind(usersAPI), unFollow)
}