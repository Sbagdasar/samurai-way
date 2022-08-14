import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


type MyPostsPropsType={
    posts:Array<PostType>
}

export const MyPosts = (props:MyPostsPropsType) => {

    let postElement = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
};