import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileItemPropsType} from "../../redux/reducers/profile-reducer";

export type ProfilePropsType ={
    profile:ProfileItemPropsType|null
    setUserProfile:(profile:ProfileItemPropsType)=>void
}

export const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};
