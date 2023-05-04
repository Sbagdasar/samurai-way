import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsType} from "./reducers/profile-reducer";
import dialogsReducer, {DialogsActionsType} from "./reducers/dialogs-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import {UsersActionsType, usersReducer} from "./reducers/users-reducer";
import {AuthActionsType, authReducer} from "./reducers/auth-reducer";
import thunkMiddleWare, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {reducer as formReducer, stopSubmit} from 'redux-form'
import {appReducer} from "./reducers/app-reducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))
export type RootTypeReduxState = ReturnType<typeof rootReducer>
export type RootTypeStore = typeof store

export type AppDispatch = ThunkDispatch<RootTypeReduxState, unknown, AppActionsType>


export type AppActionsType = AuthActionsType | DialogsActionsType | ProfileActionsType | UsersActionsType | any
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootTypeReduxState, unknown, AppActionsType>

// @ts-ignore
window.store = store