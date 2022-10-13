import s from "../Dialogs.module.css";
import React from "react";
type MessagePropsType = {
    message: string
}


export const Message:React.FC<MessagePropsType> = ({message})=>{
    return(
        <div>
            <div className={s.message}>{message}</div>

        </div>

    )
}