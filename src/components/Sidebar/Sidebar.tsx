import React from 'react';
import s from './Sidebar.module.css'
import {FriendItemType} from "../../redux/state";
type SidebarPropsType ={
    friends:Array<FriendItemType>
}
export const Sidebar: React.FC<SidebarPropsType> = (props) => {
    return (
        <article className={s.sidebarContainer}>
            <h3>Friends</h3>
            <section className={s.sectionFriends}>
                {
                    props.friends.map(friend=>{
                        return(
                            <div key={friend.id} className={s.itemFriend}>
                                <img src={friend.img}/>
                                <p>{friend.name}</p>
                            </div>
                        )
                    })
                }


            </section>
        </article>
    );
};
