import {loginDataType, profileAPI} from "../../api/api";
import {AppThunkType} from "../redux-store";
import {stopSubmit} from "redux-form";

export type  InitialStateType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}
let initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}
type SetUserDataACType = ReturnType<typeof setAuthUserData>

export type AuthActionsType = SetUserDataACType

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
  switch (action.type) {
    case "AUTH/SET-USER-DATA": {
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


export const authMeTC = (): AppThunkType => async (dispatch) => {
  let data= await profileAPI.getAuth()

  if (data.resultCode === 0) {
    const {id, login, email} = data.data
    dispatch(setAuthUserData(id, login, email, true))

  }
}

export const loginTC = (data: loginDataType): AppThunkType => async (dispatch) => {
  let response = await profileAPI.login(data)
  console.log(response)
  if (response.resultCode == 0) {
    dispatch(authMeTC())
  } else {
    dispatch(stopSubmit('login', {_error: response.messages[0]}))
  }
}
export const logoutTC = (): AppThunkType => async (dispatch) => {
  const res = await profileAPI.logout()
  if (res.resultCode == 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}