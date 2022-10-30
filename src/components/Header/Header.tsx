import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://i.pinimg.com/originals/36/3d/7f/363d7f067f650aead9dc45de0d05471d.png" alt="logo"/>
            <div className={s.login}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    )
}