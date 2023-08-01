import React from 'react';
import s from "../Users.module.css";
import {NavLink} from "react-router-dom";
import defaultUser from "../../../assets/images/usersPage/defaultUser.jpeg";
import {UserType} from "../../../redux/reducers/users-reducer";
type UserPT={
  user:UserType
  unFollowHandler:(id:number)=>void
  followHandler:(id:number)=>void
  followingInProgress:Array<number>
}
export const User = ({user, followHandler, unFollowHandler, ...props}:UserPT) => {
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
  );
};

