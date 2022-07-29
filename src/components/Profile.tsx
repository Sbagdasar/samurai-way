import React from 'react';
import s from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://cdn.wallpapersafari.com/61/41/c6lhFM.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    new post
                </div>
                <div>
                    <div className={s.item}>post1</div>
                    <div className={s.item}>post2</div>
                </div>
            </div>
        </div>
    );
};
