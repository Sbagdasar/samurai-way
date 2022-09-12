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
type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE"
    message: string
}
type AddNewMessageActionType = {
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
    addPost: () => void
    updateNewPostText: (text: string) => void
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

    addPost() {
        let newPost: PostType = {id: 4, message: this._state.profilePage.newPostText, likeCounts: 0}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''

        //this._callSubscriber(this._state)
    },
    updateNewPostText(text: string) {
        this._state.profilePage.newPostText = text
        // this._callSubscriber(this._state)

    },

    dispatch(action: ActionsType) {
        switch (action.type) {
            case "ADD-POST":
// this.addPost()
                //let newPost:PostType = {id:new Date().getTime(), message: action.newPostText, likeCounts: 0}
                debugger
                let newPost: PostType = {
                    id: new Date().getTime(),
                    message: this._state.profilePage.newPostText,
                    likeCounts: 0
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber()
                break;
            case "UPDATE-NEW-POST-TEXT":

                this._state.profilePage.newPostText = action.newPostText
                this._callSubscriber()
                break
            case "ADD-NEW-MESSAGE":
                let newMessage: MessageType = {
                    id: new Date().getTime(),
                    message: this._state.dialogsPage.newMessageText
                }
                this._state.dialogsPage.messages.push(newMessage)
                this._state.dialogsPage.newMessageText = ''
                console.log(this._state.dialogsPage.newMessageText)
                this._callSubscriber()
                break
            case "UPDATE-NEW-MESSAGE":
                this._state.dialogsPage.newMessageText = action.message
                this._callSubscriber()
                break
            default:
                throw Error('Error')
        }
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: "ADD-POST"})
export const updateNewPostTextAC = (text: string): UpdateNewPostTextActionType => ({
    type: "UPDATE-NEW-POST-TEXT",
    newPostText: text
})
export const addNewMessageAC = (): AddNewMessageActionType => ({
    type: "ADD-NEW-MESSAGE",
})
export const updateNewMessageTextAC = (message: string): UpdateNewMessageTextActionType => ({
    type: "UPDATE-NEW-MESSAGE",
    message: message
})

export default store;