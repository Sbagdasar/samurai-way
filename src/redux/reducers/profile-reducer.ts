//type AddPostActionType = ReturnType<typeof addPostActionCreator>
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newPostText: string
}
type PostType = {
    id: number
    message: string
    likeCounts: number
}
let initialState:InitialStateType = {
    posts: [],
    newPostText: '',
    profile: null
}
type ProfileContacts = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
}
type ProfilePhotos = {
    small: string,
    large: string
}
export type ProfileItemPropsType = {
    aboutMe: string,
    contacts: ProfileContacts,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: ProfilePhotos
}
type SetUserProfileType = ReturnType<typeof setUserProfile>
export type  InitialStateType = {
    posts: Array<PostType>,
    newPostText: string,
    profile: ProfileItemPropsType|null
}
type ActionsType = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileType

const profileReducer = (state:InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":

            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCounts: 0
            }

            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newPostText}
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: "ADD-POST"})
export const setUserProfile = (profile: ProfileItemPropsType) => {
    return ( {
    type: "SET-USER-PROFILE" as const,
    profile
})}
export const updateNewPostTextAC = (text: string): UpdateNewPostTextActionType => ({
    type: "UPDATE-NEW-POST-TEXT",
    newPostText: text
})
 export const getProfileTC = (userId:string)=>(dispatch:Dispatch)=>{
     profileAPI.getProfile(userId).then(data => {
         dispatch(setUserProfile(data))
     })
 }



export default profileReducer;