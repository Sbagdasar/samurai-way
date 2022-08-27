import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {addPost, PostType} from "../../../redux/state";


type MyPostsPropsType={
    posts:Array<PostType>
    addPost:(postMessage:string)=>void
}

export const MyPosts = (props:MyPostsPropsType) => {

    let postElement = props.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost=()=> {
        if(newPostElement.current){
            props.addPost(newPostElement.current.value)
            newPostElement.current.value=''
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
};