import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {FormDataAddMessageType, ReduxAddMessageForm} from "../Common/forms/AddMessageForm";

type DialogType = {
  id: number
  name: string
}
type MessageType = {
  id: number,
  message: string
}
export type DialogsPageType = {
  dialogs: Array<DialogType>,
  messages: Array<MessageType>,
}
type DialogsPropsType = {
  dialogsPage: DialogsPageType
  //dispatch:(action:ActionsType)=>void
  addMessage: (message: string) => void
  isAuth: boolean
}
export const Dialogs = (props: DialogsPropsType) => {

  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
  let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)
  const addNewMessage = (values:FormDataAddMessageType) => {
    props.addMessage(values.newMessageBody)
  }
  return (
    <>
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
      <ReduxAddMessageForm onSubmit={addNewMessage}/>
    </>

  );
};
