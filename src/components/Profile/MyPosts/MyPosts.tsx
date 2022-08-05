import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, ow are you' likeCounts={15}/>
                <Post message='Its my first post' likeCounts={20}/>
            </div>
        </div>
    );
};