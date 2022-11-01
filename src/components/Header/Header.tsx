import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
type HeaderPropsType = {
    login: string | null,
    isAuth: boolean
    profilePhoto:string|undefined
}
export const Header:React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src="https://i.pinimg.com/originals/36/3d/7f/363d7f067f650aead9dc45de0d05471d.png" alt="logo"/>
            <div className={s.login}>
                {
                    props.isAuth? props.login:<NavLink to={'/login'}>Login</NavLink>
                }
                {
                    props.profilePhoto?null:<img src={props.profilePhoto} alt="profile photo"/>
                }

            </div>
        </header>
    )
}