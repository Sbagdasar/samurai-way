let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
type ActionsType =
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | ToggleIsFetchingACType

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
        case 'TOGGLE-IS-FETCHING':{
            return {
                ...state, isFetching:action.isFetching
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