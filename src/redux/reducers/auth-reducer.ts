import {loginDataType, profileAPI, securityAPI} from "api/api";
import {AppThunkType} from "../redux-store";
import {stopSubmit} from "redux-form";

export type  InitialStateType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  captcha:null | string

}
let initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captcha:null
}
type SetUserDataACType = ReturnType<typeof setAuthUserData>

export type AuthActionsType = SetUserDataACType | ReturnType<typeof setCaptchaUrl>

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
  switch (action.type) {
    case "AUTH/SET-USER-DATA":
     case"AUTH/SET-CAPTCHA-URL": {
      return {
        ...state,
        ...action.payload,
      }
    }
    default:
      return state
  }
}
export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
  type: "AUTH/SET-USER-DATA",
  payload: {id, email, login, isAuth}
})
const setCaptchaUrl = (captcha: string|null ) => ({
  type: "AUTH/SET-CAPTCHA-URL",
  payload: {captcha}
} as const)


export const authMeTC = (): AppThunkType => async (dispatch) => {
  let data = await profileAPI.getAuth()

  if (data.resultCode === 0) {
    const {id, login, email} = data.data
    dispatch(setAuthUserData(id, login, email, true))

  }
}

export const loginTC = (data: loginDataType): AppThunkType => async (dispatch) => {
  let response = await profileAPI.login(data)
  if (response.resultCode == 0) {
    dispatch(authMeTC())
  } else {
    if (response.resultCode == 10) {
      dispatch(getCaptchaUrl())
    }
    dispatch(stopSubmit('login', {_error: response.messages[0]}))
  }
}
export const getCaptchaUrl = (): AppThunkType => async (dispatch) => {
  const res = await securityAPI.getCaptchaUrl()
  dispatch(setCaptchaUrl(res.url))
}
export const logoutTC = (): AppThunkType => async (dispatch) => {
  const res = await profileAPI.logout()
  if (res.resultCode == 0) {
    dispatch(setAuthUserData(null, null, null, false))
    dispatch(setCaptchaUrl(null))

  }
}