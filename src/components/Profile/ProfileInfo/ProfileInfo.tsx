import React from 'react';
import s from "./Profilenfo.module.css";
import {ProfileItemPropsType} from "../../../redux/reducers/profile-reducer";
import {Preloader} from "../../Common/Preloader/Preloader";
import defaultImage from '../../../assets/images/usersPage/defaultUser.jpeg'
import {ProfileStatusF} from "../ProfileStatus/ProfileStatusF";

type ProfileInfoPropsType={
    profile:ProfileItemPropsType|null
    status:string
    updateStatusTC:(status:string)=>void
}
export const ProfileInfo = (props:ProfileInfoPropsType) => {

    if(!props.profile){
        return <Preloader/>
    }else{
        return (
            <div>
                {/*<div>
                    <img className={s.content_img}
                         src="https://socialprint.com/wp-content/uploads/banner.policies.1920x500.png" alt=""/>
                </div>*/}
                <div className={s.descriptionBlock}>
                    <div>
                        <img src={props.profile.photos.small ? props.profile.photos.small : defaultImage}
                             alt={'props.profile.photos.small'} className={s.profilePhoto}/>
                    </div>
                    <ProfileStatusF status={props.status} updateStatusTC={props.updateStatusTC}/>
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
