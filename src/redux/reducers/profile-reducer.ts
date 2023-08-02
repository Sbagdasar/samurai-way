//type AddPostActionType = ReturnType<typeof addPostActionCreator>
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";

type AddPostActionType = {
  type: 'PROFILE/ADD-POST'
  newPost: string
}

type SetProfileStatusType = ReturnType<typeof setProfileStatus>
type PostType = {
  id: number
  message: string
  likeCounts: number
}
let initialState: InitialStateType = {
  posts: [],
  newPostText: '',
  profile: null,
  status: ''
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
export type ProfilePhotos = {
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
  profile: ProfileItemPropsType | null
  status: string
}
export type ProfileActionsType = AddPostActionType | SetUserProfileType | SetProfileStatusType | ReturnType<typeof setProfilePhoto>

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
  switch (action.type) {
    case "PROFILE/ADD-POST":

      let newPost: PostType = {
        id: new Date().getTime(),
        message: action.newPost,
        likeCounts: 0
      }

      return {...state, posts: [...state.posts, newPost]}
    case "PROFILE/SET-USER-PROFILE": {
      return {...state, profile: action.profile}
    }
    case "PROFILE/SET-STATUS": {
      return {...state, status: action.status}
    }
    case "PROFILE/SET-PHOTO":{
      // @ts-ignore
      return {...state, profile:{ ...state.profile, photos:action.photos}}
    }
    default:
      return state
  }
}

export const addPostActionCreator = (newPost: string): AddPostActionType => ({type: "PROFILE/ADD-POST", newPost})
export const setUserProfile = (profile: ProfileItemPropsType) => {
  return ({
    type: "PROFILE/SET-USER-PROFILE" as const,
    profile
  })
}
export const setProfileStatus = (status: string) => ({
  type: 'PROFILE/SET-STATUS',
  status
} as const)
export const setProfilePhoto = (photos: ProfilePhotos) => ({
  type: 'PROFILE/SET-PHOTO',
  photos
} as const)


export const getProfileTC = (userId: string) => async (dispatch: Dispatch) => {
  let data = await profileAPI.getProfile(userId)

  dispatch(setUserProfile(data))
}
export const getStatusTC = (userId: string) => async (dispatch: Dispatch) => {
  let res = await profileAPI.getStatus(userId)
  dispatch(setProfileStatus(res))

}

export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
  let res = await profileAPI.updateStatus(status)
  if (res.resultCode === 0) {
    dispatch(setProfileStatus(status))
  }
}
export const saveFileTC = (file: File) => async (dispatch: Dispatch) => {
  let formFileData = new FormData()
  formFileData.append('image', file)
  let res = await profileAPI.saveProfileFile(formFileData)
  if (res.resultCode === 0) {
   dispatch(setProfilePhoto(res.data.photos))
  }
}

export default profileReducer;