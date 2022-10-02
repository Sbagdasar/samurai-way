import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/store";
import {access} from "fs";
import {RootTypeStore} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType ={
    //store:RootTypeStore
   // profilePage: ProfilePageType
    //addPost:()=>void
    //dispatch:(action:ActionsType)=>void
    //updateNewPostText:(text:string)=>void
}

export const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};
