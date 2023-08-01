import React from 'react';
import {UserType} from "../../redux/reducers/users-reducer";
import {Paginator} from "../Common/Paginator/Paginator";
import {User} from "./User/User";

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
                    <User key={user.id} user={user} unFollowHandler={unFollowHandler} followHandler={followHandler} followingInProgress={props.followingInProgress}/>
                )
            })}
        </div>
    );
};
