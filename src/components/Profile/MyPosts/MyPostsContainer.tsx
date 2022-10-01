import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ActionsType, PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextAC} from "../../../redux/reducers/profile-reducer";
import {RootTypeStore} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";


type MyPostsContainerPropsType = {
    store:RootTypeStore
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
let state = props.store.getState()
    const addPost = () => {

        props.store.dispatch(addPostActionCreator())
    }
    const onChangeHandler = (text:string) => {

        props.store.dispatch(updateNewPostTextAC(text))
    }
    return (
        <MyPosts posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
                addPost={addPost}
                 updateNewPostText={onChangeHandler}
        />
    );
};