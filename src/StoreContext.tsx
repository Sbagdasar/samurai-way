import React from "react";
import {RootTypeStore} from "./redux/redux-store";

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