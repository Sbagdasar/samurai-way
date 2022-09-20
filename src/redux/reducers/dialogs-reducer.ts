import {
    ActionsType,
    AddNewMessageActionType,
    DialogsPageType,
    MessageType,
    UpdateNewMessageTextActionType
} from "../store";

let initialState ={
    dialogs: [
        {id: 1, name: 'Sam'},
        {id: 2, name: 'Jenifer'},
        {id: 3, name: 'Adam'},
        {id: 4, name: 'Tom'},
        {id: 5, name: 'Joe'},
        {id: 6, name: 'Eva'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Jyt'}
    ],
    newMessageText: ''
}
const dialogsReducer=(state:DialogsPageType=initialState, action:ActionsType)=>{
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