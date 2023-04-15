import {loginDataType, profileAPI} from "../../api/api";
import {setUserProfile} from "./profile-reducer";
import {AppThunkType} from "../redux-store";

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
type SetUserDataACType = ReturnType<typeof setAuthUserData>

export type AuthActionsType = SetUserDataACType

export const authReducer = (state:InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
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


export const authMeTC = (): AppThunkType=>(dispatch)=>{
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


export const loginTC =(data:loginDataType): AppThunkType=>(dispatch)=>{
    profileAPI.login(data).then(res=>{
        if(res.resultCode == 0){
            dispatch(authMeTC())
        }
    })
}