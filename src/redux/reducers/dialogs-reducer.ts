
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
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number,
    message: string
}
export type InitialStateType = typeof initialState
export type AddNewMessageActionType = {
    type: "ADD-NEW-MESSAGE",
}
export type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE"
    message: string
}
type ActionsType = AddNewMessageActionType| UpdateNewMessageTextActionType

const dialogsReducer=(state:InitialStateType=initialState, action:ActionsType):InitialStateType=>{
    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageText
            }

           return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        case "UPDATE-NEW-MESSAGE":
           return {...state, newMessageText: action.message}
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