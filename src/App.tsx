import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {RootTypeReduxState, RootTypeStore} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import store from "./redux/store";
import {Users} from "./components/Users";

type AppPropsType = {
   // store: RootTypeStore
}

const App = (props: AppPropsType) => {
   const state: RootTypeReduxState = store.getState()
    return (
            <div className='app-wrapper'>
                <Header/>
                <div className={'navSidebar'}>
                    <Navbar/>
                    <Sidebar friends={state.sidebar.friends}/>
                </div>

                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                    <Route path={'/users'} render={() => <Users/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
    );
}

export default App;
