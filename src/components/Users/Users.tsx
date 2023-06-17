import React from 'react';
import s from "./Users.module.css";
import defaultUser from "../../assets/images/usersPage/defaultUser.jpeg";
import {UserType} from "../../redux/reducers/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../Common/Paginator/Paginator";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    getCurrentPageUsers: (page: number) => void
    followingInProgress: Array<number>
    followTC:(id:number)=>void
    unfollowTC:(id:number)=>void
}
export const Users = ({getCurrentPageUsers, unfollowTC, followTC,pageSize,currentPage, totalUsersCount, ...props}: UsersPropsType) => {

    const onSetCurrentPage = (page: number) => {
        getCurrentPageUsers(page)
    }
    const unFollowHandler = (id: number) => {
        unfollowTC(id)
    }
    const followHandler = (id: number) => {
        followTC(id)
    }
    return (
        <div>
            <Paginator pageSize={pageSize}
                       currentPage={currentPage}
                       onSetCurrentPage={onSetCurrentPage}
                       totalItemsCount={totalUsersCount}/>
            {props.users.map(user => {

                return (
                    <div key={user.id} className={s.usersContainer}>
                        <div className={s.userItemContainer}>
                            <div className={s.avatarBlock}>
                                <div>
                                    <NavLink to={'/profile/' + user.id}>
                                        <img
                                            src={user.photos.small ? user.photos.small : defaultUser}
                                            alt=""/>
                                    </NavLink>
                                </div>
                                <div>
                                    {user.followed ?
                                        <button disabled={props.followingInProgress.some(id=>id===user.id)}
                                                onClick={() => unFollowHandler(user.id)}>Unfollow</button> :
                                        <button disabled={props.followingInProgress.some(id=>id===user.id)}
                                                onClick={() => followHandler(user.id)}>Follow</button>
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
