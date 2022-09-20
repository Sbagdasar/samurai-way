import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/redux-store";


export const renderEntireTree = () => {
    ReactDOM.render(
        <App store={store}
        />,
        document.getElementById('root')
    );
}
renderEntireTree()
store.subscribe(renderEntireTree)