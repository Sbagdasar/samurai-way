import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/reducers/app-reducer";
import {RootTypeReduxState} from "./redux/redux-store";
import {Preloader} from "./components/Common/Preloader/Preloader";

const App = () => {
  const isInitialized = useSelector<RootTypeReduxState, boolean>(state => state.app.initialized)
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeApp())
  }, [])

  if (!isInitialized) {
    return <Preloader/>
  }

  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
      <div className={'navSidebar'}>
        <Navbar/>
        {/*<Sidebar friends={state.sidebar.friends}/>*/}
      </div>
      <div className={'app-wrapper-content'}>
        <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
        <Route path={'/users'} render={() => <UsersContainer/>}/>
        <Route path={'/news'} render={() => <News/>}/>
        <Route path={'/music'} render={() => <Music/>}/>
        <Route path={'/settings'} render={() => <Settings/>}/>
        <Route path={'/login'} render={() => <LoginContainer/>}/>
      </div>
    </div>
  );
}

export default App;
