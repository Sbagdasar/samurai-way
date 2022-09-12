import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/store";
import {access} from "fs";

type ProfilePropsType ={
    profilePage: ProfilePageType
    //addPost:()=>void
    dispatch:(action:ActionsType)=>void
    //updateNewPostText:(text:string)=>void
}

export const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     //addPost={props.addPost}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}
                     //updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};
