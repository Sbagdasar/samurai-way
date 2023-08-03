import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import defaultAva from 'assets/images/usersPage/defaultUser.jpeg'
import {Navbar} from "components/Navbar/Navbar";
import logo from "assets/images/logo/logo.8a063c2a.svg"

type HeaderPropsType = {
  login: string | null,
  isAuth: boolean
  profilePhoto: string | undefined
  authMeTC: () => void
  logoutTC: () => void
}
export const Header: React.FC<HeaderPropsType> = (props) => {
  return (
    <header className={s.headerContainer}>
      <div className={s.header}>
        <img src={logo} alt="logo"/>
        <Navbar/>
        <div className={s.login}>
          <div>
            {
              !props.profilePhoto ? null : props.isAuth && <img src={props.profilePhoto ? props.profilePhoto : defaultAva}
                                                                alt="profile photo" className={s.ava}/>
            }
          </div>
          {
            props.isAuth ?
              <div>
                <button onClick={props.logoutTC}>
                  logout
                </button>
              </div>
              : <NavLink to={'/login'}>Login</NavLink>
          }
        </div>
      </div>
      <div className={s.backgroundImageHeader}></div>
    </header>
  )
}