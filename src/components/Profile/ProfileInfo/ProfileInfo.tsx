import React from 'react';
import s from "./Profilenfo.module.css";
import {ProfileItemPropsType} from "../../../redux/reducers/profile-reducer";
import {Preloader} from "../../Common/Preloader/Preloader";
type ProfileInfoPropsType={
    profile:ProfileItemPropsType|null
}
export const ProfileInfo = (props:ProfileInfoPropsType) => {

    if(!props.profile){
        return <Preloader/>
    }else{
        return (
            <div>
                <div>
                    <img className={s.content_img}
                         src="https://socialprint.com/wp-content/uploads/banner.policies.1920x500.png" alt=""/>
                </div>
                <div className={s.descriptionBlock}>
                    <div>
                        <img src={props.profile.photos.small} alt={'props.profile.photos.small'}/>
                    </div>
                    <div>
                        <p>{props.profile.aboutMe}</p>
                        <p>{props.profile.fullName}</p>
                        <p>{props.profile.lookingForAJobDescription}</p>
                    </div>
                </div>
            </div>
        );
    }


};
