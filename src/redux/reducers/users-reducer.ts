let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: "Samvel",
            status: "i am cool boy",
            location: {country: "Belarus", city: "Minsk"}
        },
        {
            id: 2,
            followed: true,
            fullName: "Chesya",
            status: "i am cool girl",
            location: {country: "Belarus", city: "Minsk"}
        },
        {
            id: 3,
            followed: false,
            fullName: "Eva",
            status: "i am cool girl too",
            location: {country: "Belarus", city: "Minsk"}
        }
    ]
}

export type InitialStateType = typeof initialState

type UserType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType

}
type LocationType = {
    country: string,
    city: string

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
        case "SET-USERS":{
            return {...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}

const followAC = (userID: number): FollowACType => ({
    type: "FOLLOW", userID
})
const unFollowAC = (userID: number) => ({
    type: "UNFOLLOW", userID
})
const setUsersAC = (users: Array<UserType>): SetUsersACType => ({
    type: "SET-USERS",
    users
})