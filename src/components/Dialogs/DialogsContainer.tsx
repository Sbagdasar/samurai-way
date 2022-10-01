import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsType,
    DialogsPageType,
    DialogType,
    MessageType
} from "../../redux/store";
import {addNewMessageAC, updateNewMessageTextAC} from "../../redux/reducers/dialogs-reducer";
import {RootTypeStore} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
   store:RootTypeStore
}
export const DialogsContainer = (props: DialogsPropsType) => {
let state = props.store.getState()

    const addMessage=()=> {
        props.store.dispatch(addNewMessageAC())
    }
    const onChangeMessageHandler=(message: string)=>{

        props.store.dispatch(updateNewMessageTextAC(message))
    }
    return (
        <>
            <Dialogs dialogsPage={state.dialogsPage} addMessage={addMessage} updateNewMessage={onChangeMessageHandler}/>
        </>

    );
};
