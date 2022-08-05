import React from 'react';
import s from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a href={'/profile'}>Profile</a>
            </div>
            <div className={s.item}>
                <a href={'/Dialogs'}>Messages</a>
            </div>
            <div className={s.item}>
                <a href={''}>News</a>
            </div>
            <div className={s.item}>
                <a href={''}>Music</a>
            </div>
            <div className={s.item}>
                <a href={''}>Settings</a>
            </div>
        </nav>
    );
};
