import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
type MessagePropsType = {
    message: string
}
export const Message:React.FC<MessagePropsType> = ({message})=>{
    return(
        <div className={s.message}>{message}</div>
    )
}