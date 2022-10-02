import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from './StoreContext';


export const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>

        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}
renderEntireTree()
store.subscribe(renderEntireTree)