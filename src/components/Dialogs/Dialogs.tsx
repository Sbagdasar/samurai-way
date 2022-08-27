import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)
    let newMessageRef = React.createRef<HTMLTextAreaElement>()
    const addMessage=()=> {
        console.log(newMessageRef.current?.value)
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
                <textarea ref={newMessageRef}></textarea>
                <button onClick={addMessage}>send message</button>
            </div>
        </>

    );
};
