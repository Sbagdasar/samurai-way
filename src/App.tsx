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
import {StoreType} from "./redux/state";
import {Sidebar} from "./components/Sidebar/Sidebar";

type AppPropsType = {
    store:StoreType
}

const App = (props: AppPropsType) => {
    const  state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className={'navSidebar'}>
                    <Navbar/>
                    <Sidebar friends={state.sidebar.friends}/>
                </div>

                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={()=><Dialogs messages={state.dialogsPage.messages}
                                                                  dialogs={state.dialogsPage.dialogs}/>}/>
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
