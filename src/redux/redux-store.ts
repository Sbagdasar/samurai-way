import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {authReducer} from "./reducers/auth-reducer";
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))
export type RootTypeReduxState = ReturnType<typeof rootReducer>
export type RootTypeStore = typeof store

// @ts-ignore
window.store = store