import React from 'react';
import {UserType} from "../../redux/reducers/users-reducer";
type UsersPropsType={
    users:Array<UserType>
}
export const Users = (props:UsersPropsType) => {
    return (
        <div>
            {props.users.map(user=>{return(
                <div key={user.id}>{user.fullName}</div>
            )})}
        </div>
    );
};
