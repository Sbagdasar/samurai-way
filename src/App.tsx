import React, {lazy, Suspense, useEffect} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Provider, useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/reducers/app-reducer";
import {RootTypeReduxState, store} from "./redux/redux-store";
import {Preloader} from "./components/Common/Preloader/Preloader";
import {LoginContainer} from "./components/Login/Login";

const AppContainer = () => {
  const isInitialized = useSelector<RootTypeReduxState, boolean>(state => state.app.initialized)
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeApp())
  }, [])

  if (!isInitialized) {
    return <Preloader/>
  }
  const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"))
  const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"))

  return (<div className='app-wrapper'>
      <HeaderContainer/>
      <div className={'navSidebar'}>
        <Navbar/>
        {/*<Sidebar friends={state.sidebar.friends}/>*/}
      </div>
      <div className={'app-wrapper-content'}>
        <Suspense fallback={<Preloader/>}>
          <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
          <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
          <Route path={'/users'} render={() => <UsersContainer/>}/>
          <Route path={'/news'} render={() => <News/>}/>
          <Route path={'/music'} render={() => <Music/>}/>
          <Route path={'/settings'} render={() => <Settings/>}/>
          <Route path={'/login'} render={() => <LoginContainer/>}/>
        </Suspense>
      </div>
    </div>);
}

export const SamuraiJSApp = () => {
  return (<BrowserRouter>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </BrowserRouter>)
}

