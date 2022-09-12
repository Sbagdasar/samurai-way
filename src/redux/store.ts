import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import exp from "constants";

export type PostType = {
    id: number
    message: string
    likeCounts: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number,
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    newMessageText: string
}
export type FriendItemType = {
    id: number,
    name: string,
    img: string
}
export type SideBarType = {
    friends: Array<FriendItemType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SideBarType
}

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newPostText: string
}
export type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE"
    message: string
}
export type AddNewMessageActionType = {
    type: "ADD-NEW-MESSAGE",
}
export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddNewMessageActionType
    | UpdateNewMessageTextActionType

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    // addPost: () => void
    // updateNewPostText: (text: string) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, ow are you", likeCounts: 15},
                {id: 2, message: "Its my first post", likeCounts: 25},
                {id: 3, message: "Its my first post2", likeCounts: 5},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Vadim', img: '/img/vadim.jpg'},
                {id: 2, name: 'Eric', img: '/img/eric.jpg'}
            ]
        }
    },
    _callSubscriber() {
        console.log('changed state')
    },

    /*addPost() {
        let newPost: PostType = {id: 4, message: this._state.profilePage.newPostText, likeCounts: 0}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''

        //this._callSubscriber(this._state)
    },
    updateNewPostText(text: string) {
        this._state.profilePage.newPostText = text
        // this._callSubscriber(this._state)

    },*/

    dispatch(action: ActionsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    }
}


export default store;