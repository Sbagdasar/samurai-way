import React from 'react';
import {addNewMessageAC, updateNewMessageTextAC} from "../../redux/reducers/dialogs-reducer";
import {Dialogs, DialogsPageType} from "./Dialogs";
import {RootTypeReduxState} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";


/*export const DialogsContainer = (props: DialogsPropsType) => {

    return (
        <>
            <StoreContext.Consumer>
                {
                    (store)=>{
                        let state = store.getState()

                        const addMessage=()=> {
                            store.dispatch(addNewMessageAC())
                        }
                        const onChangeMessageHandler=(message: string)=>{

                            store.dispatch(updateNewMessageTextAC(message))
                        }
                        return(
                        <Dialogs dialogsPage={state.dialogsPage} addMessage={addMessage} updateNewMessage={onChangeMessageHandler}/>
                    )}
                }

            </StoreContext.Consumer>

        </>

    );
};*/

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth:boolean

}
type MapDispatchToPropsType = {
    addMessage:()=>void,
    updateNewMessage:(message: string) => void
}

const mapStateToProps=(state:RootTypeReduxState):MapStateToPropsType=>{
    return {
        dialogsPage: state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}

const mapDispatchToProps=(dispatch: Dispatch):MapDispatchToPropsType=>{
    return{
        addMessage:()=>{dispatch(addNewMessageAC())},
        updateNewMessage:(message: string) => {
            dispatch(updateNewMessageTextAC(message))
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)