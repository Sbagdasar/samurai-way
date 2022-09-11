import React from 'react';
import s from "./Post.module.css"

type PostPropsType = {
    message: string,
    likeCounts: number
}
export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://i1.sndcdn.com/avatars-000002061067-xtanty-t500x500.jpg"
                alt=""/>
            {props.message}
            <div>
                <span>like - {props.likeCounts}</span>
            </div>
        </div>
    );
};
