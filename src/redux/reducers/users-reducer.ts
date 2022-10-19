let initialState = {
    users: []
}

export type InitialStateType = {
    users: Array<UserType>
}

export type UserType = {
    id: number,
    photoUrl: string,
    followed: boolean,
    name: string,
    status: string,
    //location: LocationType

}
// type LocationType = {
//     country: string,
//     city: string
//
// }
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
type ActionsType = FollowACType | UnFollowACType | SetUsersACType

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
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}

export const followAC = (userID: number): FollowACType => ({
    type: "FOLLOW", userID
})
export const unFollowAC = (userID: number) => ({
    type: "UNFOLLOW", userID
})
export const setUsersAC = (users: Array<UserType>): SetUsersACType => ({
    type: "SET-USERS",
    users
})