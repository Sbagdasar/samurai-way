import React from 'react';
import s from "./Profilenfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.content_img} src="https://cdn.wallpapersafari.com/61/41/c6lhFM.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};
