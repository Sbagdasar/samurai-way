import React from 'react';
import preloader from "../../../assets/images/preloader/preloader.svg";

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt={'preloader'}/>
        </div>
    );
};
