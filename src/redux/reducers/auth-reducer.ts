import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";
import {setUserProfile} from "./profile-reducer";

export type  InitialStateType = {
    id:number|null
    email:string|null
    login:string|null
    isAuth:boolean
}
let initialState:InitialStateType={
    id:null,
    email:null,
    login:null,
    isAuth:false
}
type SetUserDataACType = {
    type:"SET-USER-DATA",
    data: InitialStateType
}
type ActionsType = SetUserDataACType

export const authReducer = (state:InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":{
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        }
        default:
            return state
    }
}
export const setAuthUserData=(id:number, login:string, email:string)=>({
    type:"SET-USER-DATA",
    data:{id,email,login}
})

export const authMeTC = ()=>(dispatch:Dispatch)=>{
    profileAPI.getAuth().then(data => {
        if (data.resultCode === 0) {
            const {id, login, email} = data.data
            dispatch(setAuthUserData(id, login, email))
            profileAPI.getProfile(id).then(data => {
               dispatch(setUserProfile(data.profile))
            })
        }
    })
}