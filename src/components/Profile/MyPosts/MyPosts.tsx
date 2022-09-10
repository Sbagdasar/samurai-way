import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ActionsType, PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostType>
    //addPost: () => void
    dispatch:(action:ActionsType)=>void
    newPostText: string
    //updateNewPostText:(text:string)=>void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postElement = props.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
            //props.addPost()
        props.dispatch({type:"ADD-POST", newPostText:props.newPostText})
    }
    const onChangeHandler = () => {

        if(newPostElement.current){
            let text = newPostElement.current.value
            //props.updateNewPostText(text)
            props.dispatch({type:"UPDATE-NEW-POST-TEXT", newPostText:text})
        }

    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeHandler} ref={newPostElement} value={props.newPostText}/>
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