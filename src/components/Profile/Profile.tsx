import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
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
