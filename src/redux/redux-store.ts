import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})


export const store = createStore(rootReducer)
export type RootTypeReduxState = ReturnType<typeof store.getState>
export type RootTypeStore = typeof store