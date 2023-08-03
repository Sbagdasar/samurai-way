import React from 'react';
import s from './Contacts.module.css'
import {ProfileContacts} from "redux/reducers/profile-reducer";
type ContactsPropsType={
  contacts: ProfileContacts
}
export const Contacts = ({contacts}: ContactsPropsType) => {
  return (
    <div className={s.contactsBlock}>
      <ul>
        {
          Object.entries(contacts).map(item=> {
            return(
              <li key={item[0]}>{item[0]}: {item[1] + '1'} </li>
            )
          })
        }
      </ul>

      </div>
  );
};

