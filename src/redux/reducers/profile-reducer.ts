import {ActionsType, PostType, ProfilePageType} from "../store";

//type AddPostActionType = ReturnType<typeof addPostActionCreator>
type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newPostText: string
}

let initialState = {
    posts: [
        {id: 1, message: "Hi, ow are you", likeCounts: 15},
        {id: 2, message: "Its my first post", likeCounts: 25},
        {id: 3, message: "Its my first post2", likeCounts: 5},
    ],
    newPostText: ''
}
const profileReducer=(state:ProfilePageType =initialState, action:ActionsType)=>{
    switch (action.type) {
        case "ADD-POST":

            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCounts: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = ():AddPostActionType => ({type: "ADD-POST"})
export const updateNewPostTextAC = (text: string): UpdateNewPostTextActionType => ({
    type: "UPDATE-NEW-POST-TEXT",
    newPostText: text
})

export default profileReducer;