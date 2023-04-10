import React from 'react';
import {addNewMessageAC} from "../../redux/reducers/dialogs-reducer";
import {Dialogs, DialogsPageType} from "./Dialogs";
import {RootTypeReduxState} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";


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

}
type MapDispatchToPropsType = {
    addMessage:(message: string) => void
}

const mapStateToProps=(state:RootTypeReduxState):MapStateToPropsType=>{
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps=(dispatch: Dispatch):MapDispatchToPropsType=>{
    return{
        addMessage:(message: string)=>{
            dispatch(addNewMessageAC(message))
        }
    }
}
export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect, withRouter)(Dialogs)
