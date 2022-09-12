import {
    ActionsType,
    AddNewMessageActionType,
    DialogsPageType,
    MessageType,
    UpdateNewMessageTextActionType
} from "../store";


const dialogsReducer=(state:DialogsPageType, action:ActionsType)=>{
    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
           return state
        case "UPDATE-NEW-MESSAGE":
            state.newMessageText = action.message
           return state
        default:
           return state
    }
}

export default dialogsReducer;
export const addNewMessageAC = (): AddNewMessageActionType => ({
    type: "ADD-NEW-MESSAGE",
})
export const updateNewMessageTextAC = (message: string): UpdateNewMessageTextActionType => ({
    type: "UPDATE-NEW-MESSAGE",
    message: message
})