import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {RootTypeReduxState, RootTypeStore} from "./redux/redux-store";

type AppPropsType = {
    store:RootTypeStore
}

const App = (props: AppPropsType) => {
    const  state:RootTypeReduxState = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className={'navSidebar'}>
                    <Navbar/>
                    <Sidebar friends={state.sidebar.friends}/>
                </div>

                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={()=><Dialogs dialogsPage={state.dialogsPage}
                                                                  dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path={'/profile'} render={()=><Profile
                        profilePage={state.profilePage}
                        dispatch={props.store.dispatch.bind(props.store)}
                        //addPost={props.store.addPost.bind(props.store)}
                        //updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                        />}/>
                    <Route path={'/news'} render={()=><News/>}/>
                    <Route path={'/music'} render={()=><Music/>}/>
                    <Route path={'/settings'} render={()=><Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
