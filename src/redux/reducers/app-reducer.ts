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
    case "INITIALIZE-SUCCESS":{
      return {
        ...state, initialized:true
      }
    }
    default: {
      return state
    }
  }
}

//actions
const initializeSuccess = () => ({type: 'INITIALIZE-SUCCESS'} as const)

//thunks

export const initializeApp = ():AppThunkType => (dispatch)=> {
let authPromise = dispatch(authMeTC())
  Promise.all([authPromise]).then(()=>{
    dispatch(initializeSuccess())
  })
}

//types
export type AppReducerActionsType = ReturnType<typeof initializeSuccess>