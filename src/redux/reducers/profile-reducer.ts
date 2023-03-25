//type AddPostActionType = ReturnType<typeof addPostActionCreator>
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";
import {message} from "antd";

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newPostText: string
}
type SetProfileStatusType = ReturnType<typeof setProfileStatus>
type PostType = {
    id: number
    message: string
    likeCounts: number
}
let initialState:InitialStateType = {
    posts: [],
    newPostText: '',
    profile: null,
    status:''
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
    status:string
}
type ActionsType = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileType | SetProfileStatusType

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
        case "SET-STATUS": {
            return {...state, status: action.status}
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
export const setProfileStatus = (status: string) => ({
    type:'SET-STATUS',
    status
} as const)

 export const getProfileTC = (userId:string)=>(dispatch:Dispatch)=>{
     profileAPI.getProfile(userId).then(data => {
         dispatch(setUserProfile(data))
     })
 }
export const getStatusTC = (userId:string)=>(dispatch:Dispatch)=>{
    profileAPI.getStatus(userId).then(res=> {
        dispatch(setProfileStatus(res))
    })
}

export const updateStatusTC = (status:string) =>(dispatch:Dispatch)=> {
    profileAPI.updateStatus(status).then(res=> {
        if(res.resultCode === 0){
            dispatch(setProfileStatus(status))
        }

    })
}

export default profileReducer;