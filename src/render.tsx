import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {RootStateType} from "./redux/state";

export const renderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <App state={state}/>,
        document.getElementById('root')
    );
}