import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";


export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{

            props.setUsers(response.data.items)
        })

    }
    return (
        <div>
            {props.users.map(user => {
                return (
                    <div key={user.id} className={s.usersContainer}>
                        <div className={s.userItemContainer}>
                            <div className={s.avatarBlock}>
                                <div>
                                    <img src={'https://i.pinimg.com/736x/8b/ad/1c/8bad1c65a635acb1ef99faf112dde46f.jpg'} alt=""/>
                                </div>
                                <div>
                                    {user.followed ?
                                        <button onClick={() => props.unfollow(user.id)}>Unfollow</button> :
                                        <button onClick={() => props.follow(user.id)}>Follow</button>
                                    }
                                </div>
                            </div>
                            <div className={s.userInfo}>
                                <div>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </div>
                                <div>
                                    <div>{"user.location.country"}</div>
                                    <div>{"user.location.city"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};
