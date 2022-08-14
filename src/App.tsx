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
import {RootStateType} from "./redux/state";
import {Sidebar} from "./components/Sidebar/Sidebar";

type AppPropsType = {
    state:RootStateType
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={()=><Dialogs messages={props.state.dialogsPage.messages} dialogs={props.state.dialogsPage.dialogs}/>}/>
                    <Route path={'/profile'} render={()=><Profile posts={props.state.profilePage.posts}/>}/>
                    <Route path={'/news'} render={()=><News/>}/>
                    <Route path={'/music'} render={()=><Music/>}/>
                    <Route path={'/settings'} render={()=><Settings/>}/>
                </div>
                <Sidebar/>
            </div>
        </BrowserRouter>
    );
}

export default App;
