import {renderEntireTree} from "../render";

export type PostType ={
    id:number
    message:string
    likeCounts:number
}
export type DialogType={
    id:number
    name:string
}
export type MessageType={
    id:number,
    message: string
}
export type ProfilePageType={
    posts:Array<PostType>
}
export type DialogsPageType={
    dialogs:Array<DialogType>,
    messages:Array<MessageType>
}
export type FriendItemType ={
    id: number,
    name:string,
    img:string
}
export type SideBarType={
    friends:Array<FriendItemType>
}
export type RootStateType={
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
    sidebar:SideBarType
}

let state:RootStateType ={
    profilePage: {
        posts:[
            {id: 1, message: "Hi, ow are you", likeCounts: 15},
            {id: 2, message: "Its my first post", likeCounts: 25},
            {id: 3, message: "Its my first post2", likeCounts: 5},
        ]
    },
    dialogsPage:{
        dialogs: [
            {id: 1, name: 'Sam'},
            {id: 2, name: 'Jenifer'},
            {id: 3, name: 'Adam'},
            {id: 4, name: 'Tom'},
            {id: 5, name: 'Joe'},
            {id: 6, name: 'Eva'}
        ],
        messages:[
            {id: 1, message: 'Hi'},
            {id: 1, message: 'How is'},
            {id: 1, message: 'Yo'},
            {id: 1, message: 'Jyt'}
        ]
    },
    sidebar:{
        friends:[
            {id: 1, name:'Vadim', img:'/img/vadim.jpg'},
            {id: 2, name:'Eric', img:'/img/eric.jpg'}
        ]
    }
}
export const addPost=(postMessage:string)=>{
    let newPost:PostType = {id:4, message: postMessage, likeCounts: 0}

    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}
export default state;