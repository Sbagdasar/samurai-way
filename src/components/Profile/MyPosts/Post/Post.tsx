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
                src="https://upload.wikimedia.org/wikipedia/commons/1/1c/DuaLipaO2020522_%28101_of_110%29_%2852052470251%29_%28cropped%29.jpg"
                alt=""/>
            {props.message}
            <div>
                <span>like - {props.likeCounts}</span>
            </div>
        </div>
    );
};
