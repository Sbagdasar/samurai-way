import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

type PostsDataType = {
    id: number
    message: string
    likeCounts: number
}
export const MyPosts = () => {
    let posts: Array<PostsDataType> = [
        {id: 1, message: "Hi, ow are you", likeCounts: 15},
        {id: 1, message: "Its my first post", likeCounts: 25},
    ]
    let postElement = posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)
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