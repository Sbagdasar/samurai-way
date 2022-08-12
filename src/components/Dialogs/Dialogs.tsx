import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogsDataType = {
    id: number,
    name: string
}
type MessagesDataType = {
    id: number,
    message: string
}
export const Dialogs = () => {
    let dialogs: Array<DialogsDataType> = [
        {id: 1, name: 'Sam'},
        {id: 2, name: 'Jenifer'},
        {id: 3, name: 'Adam'},
        {id: 4, name: 'Tom'},
        {id: 5, name: 'Joe'},
        {id: 6, name: 'Eva'}
    ]
    let messages: Array<MessagesDataType>= [
        {id:1, message:'Hi'},
        {id:1, message:'How is'},
        {id:1, message:'Yo'},
        {id:1, message:'Jyt'}
    ]
    let dialogsElements =dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements =messages.map(m =><Message message={m.message}/> )
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsElements
                }

            </div>
            <div className={s.messages}>
                {
                    messagesElements
                }
            </div>
        </div>
    );
};
