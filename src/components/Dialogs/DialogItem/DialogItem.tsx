import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
type DialogItem = {
    name: string
    id:number
}
export const DialogItem:React.FC<DialogItem> = ({name, id})=>{
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}