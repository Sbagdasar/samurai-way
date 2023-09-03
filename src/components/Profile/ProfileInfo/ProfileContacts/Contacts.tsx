import React from 'react';
import s from './Contacts.module.css'
import {ProfileContacts} from "redux/reducers/profile-reducer";
import {Button} from "antd";
type ContactsPropsType={
  contacts: ProfileContacts
  isOwner:boolean
  setEditMode: (value:boolean)=>void
}
export const Contacts = ({contacts,...props}: ContactsPropsType) => {
  return (
    <div className={s.contactsBlock}>
      <ul className={s.contactsList}>
        {
          Object.entries(contacts).map(item=> {
            if(!item[1]){
              return
            }
            return(
              <li key={item[0]}><a href={item[1]}>{item[0]}</a></li>
            )
          })
        }
      </ul>
      <Button onClick={()=>props.setEditMode(true)}>Edit contacts</Button>
      </div>
  );
};

