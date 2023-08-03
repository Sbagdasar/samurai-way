import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {FormDataAddPostFormType, ReduxAddNewPostForm} from "../../Common/forms/AddNewPostForm";

export type PostType = {
    id: number
    message: string
    likeCounts: number
}
type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (newPost:string) => void
}

export const MyPosts = React.memo((props: MyPostsPropsType) => {

    let postElement = props.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)
    const addPost = (values:FormDataAddPostFormType) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={s.postsBlock}>
          {/*<ProfileStatusF status={props.status} updateStatusTC={props.updateStatusTC}/>*/}
          {/*<div>*/}
          {/*  <p>{props.profile.aboutMe}</p>*/}
          {/*  <p>{props.profile.fullName}</p>*/}
          {/*  <p>{props.profile.lookingForAJobDescription}</p>*/}
          {/*</div>*/}
            <h3>My posts</h3>
            <ReduxAddNewPostForm onSubmit={addPost}/>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
});