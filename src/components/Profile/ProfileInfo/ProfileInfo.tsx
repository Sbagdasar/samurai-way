import React from 'react';
import s from "./Profilenfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.content_img}
                     src="https://socialprint.com/wp-content/uploads/banner.policies.1920x500.png" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};
