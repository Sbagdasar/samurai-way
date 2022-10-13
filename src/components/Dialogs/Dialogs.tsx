import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

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
    newMessageText: string
}
type DialogsPropsType = {
    dialogsPage:DialogsPageType
    //dispatch:(action:ActionsType)=>void
    addMessage:()=>void
    updateNewMessage:(message:string)=>void
}
export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageRef = React.createRef<HTMLTextAreaElement>()
    const addMessage=()=> {
        props.addMessage()
    }
    const onChangeMessageHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let message = e.currentTarget.value
        props.updateNewMessage(message)
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
            <div>
                <textarea ref={newMessageRef} onChange={onChangeMessageHandler} value={props.dialogsPage.newMessageText}/>
                <button onClick={addMessage}>send message</button>
            </div>
        </>

    );
};
