import {loginDataType, profileAPI} from "../../api/api";
import {AppThunkType} from "../redux-store";
import {stopSubmit} from "redux-form";

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
                ...action.payload,
            }
        }
        default:
            return state
    }
}
export const setAuthUserData=(id:number | null, login:string|null, email:string|null, isAuth: boolean)=>({
    type:"SET-USER-DATA",
    payload:{id,email,login, isAuth}
})


export const authMeTC = (): AppThunkType=>(dispatch)=>{
    return profileAPI.getAuth().then(data => {
        if (data.resultCode === 0) {
            const {id, login, email} = data.data
            dispatch(setAuthUserData(id, login, email, true))
            // profileAPI.getProfile(id).then(data => {
            //    dispatch(setUserProfile(data.profile))
            // })
        }
    })
}

export const loginTC =(data:loginDataType): AppThunkType=>(dispatch)=>{
    profileAPI.login(data).then(res=>{
        if(res.resultCode == 0){
            dispatch(authMeTC())
        }else {
            dispatch(stopSubmit('login', {_error: res.messages[0]}))
        }
    })
}
export const logoutTC =(): AppThunkType=> async (dispatch)=>{
    const res = await profileAPI.logout()
    if(res.resultCode == 0){
        dispatch(setAuthUserData(null, null, null, false))
    }
}