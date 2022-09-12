import React from 'react';
import './index.css';
import store, {RootStateType} from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";


export const renderEntireTree = () => {
    ReactDOM.render(
        <App store={store}
        />,
        document.getElementById('root')
    );
}
renderEntireTree()
store.subscribe(renderEntireTree)