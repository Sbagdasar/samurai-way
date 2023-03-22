import React from "react";
import {RootTypeStore, store} from "./redux/redux-store";
import App from "./App";

type ProviderPropsType = {
    store: RootTypeStore
    children: any
}
export const Provider = (props: ProviderPropsType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export const StoreContext = React.createContext({} as RootTypeStore)