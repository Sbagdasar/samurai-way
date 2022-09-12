import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsType,
    addNewMessageAC,
    DialogsPageType,
    DialogType,
    MessageType,
    updateNewMessageTextAC
} from "../../redux/store";

type DialogsPropsType = {
    dialogsPage:DialogsPageType
    dispatch:(action:ActionsType)=>void
}
export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageRef = React.createRef<HTMLTextAreaElement>()
    const addMessage=()=> {
        props.dispatch(addNewMessageAC())
    }
    const onChangeMessageHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let message = e.currentTarget.value
        props.dispatch(updateNewMessageTextAC(message))
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
