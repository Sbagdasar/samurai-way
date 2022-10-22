import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import defaultUser from '../../assets/images/usersPage/defaultUser.jpeg'
import {RootTypeReduxState} from "../../redux/redux-store";

export class Users extends React.Component<UsersPropsType, RootTypeReduxState>{
      getUsers=()=>{
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })

        }
    }
    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Get Users</button>
                {this.props.users.map(user => {
                    return (
                        <div key={user.id} className={s.usersContainer}>
                            <div className={s.userItemContainer}>
                                <div className={s.avatarBlock}>
                                    <div>
                                        <img
                                            src={user.photos.small?user.photos.small:defaultUser}
                                            alt=""/>

                                    </div>
                                    <div>
                                        {user.followed ?
                                            <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button> :
                                            <button onClick={() => this.props.follow(user.id)}>Follow</button>
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
    }
}