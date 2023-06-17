import {AppThunkType} from "../redux-store";
import {authMeTC} from "./auth-reducer";

export type  InitialStateType = {
  initialized: boolean
}
let initialState: InitialStateType = {
  initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionsType): InitialStateType => {
  switch (action.type) {
    case "APP/INITIALIZE-SUCCESS": {
      return {
        ...state, initialized: true
      }
    }
    default: {
      return state
    }
  }
}

//actions
const initializeSuccess = () => ({type: 'APP/INITIALIZE-SUCCESS'} as const)

//thunks

export const initializeApp = (): AppThunkType => async (dispatch) => {
  let authPromise = dispatch(authMeTC())
  let response = await Promise.all([authPromise])
  dispatch(initializeSuccess())
}

//types
export type AppReducerActionsType = ReturnType<typeof initializeSuccess>