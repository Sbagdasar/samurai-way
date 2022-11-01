import React from 'react';
import s from "./Users.module.css";
import defaultUser from "../../assets/images/usersPage/defaultUser.jpeg";
import {UserType} from "../../redux/reducers/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
type UsersPropsType={
    totalUsersCount:number
    pageSize:number
    currentPage:number
    users:Array<UserType>
    unFollow:(userID: number) =>void
    follow:(userID: number) =>void
    getCurrentPageUsers:(page:number)=>void
}
export const Users = (props:UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = Array.from({length: +pagesCount}, (_, i: number) => +i + 1)
    const onSetCurrentPage=(page:number)=>{
        props.getCurrentPageUsers(page)
    }

    const unFollowHandler = (id:number)=>{
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{
            withCredentials:true,
            headers:{
                "API-KEY":"1abf02da-1f01-4a57-9e95-d7c2e3ba6948"
            }
        })
            .then(response => {
                if(response.data.resultCode===0){
                    props.unFollow(id)
                }

            })
    }
    const followHandler = (id:number)=>{
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{},{
            withCredentials:true,
            headers:{
                "API-KEY":"1abf02da-1f01-4a57-9e95-d7c2e3ba6948"
            }
        })
            .then(response => {
                if(response.data.resultCode===0){
                    props.follow(id)
                }

            })
    }
    return (
        <div>
            <div className={s.pagination}>
                {
                    pages.map(p => {
                        return (
                            <span key={p}
                                  className={props.currentPage === p ? s.selectedPage : s.page}
                                  onClick={() => onSetCurrentPage(p)}>{p}</span>
                        )
                    })
                }
            </div>
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
                                        <button onClick={() => unFollowHandler(user.id)}>Unfollow</button> :
                                        <button onClick={() => followHandler(user.id)}>Follow</button>
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
