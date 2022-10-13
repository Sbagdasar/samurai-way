
//type AddPostActionType = ReturnType<typeof addPostActionCreator>
type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newPostText: string
}
type PostType = {
    id: number
    message: string
    likeCounts: number
}
let initialState = {
    posts: [
        {id: 1, message: "Hi, ow are you", likeCounts: 15},
        {id: 2, message: "Its my first post", likeCounts: 25},
        {id: 3, message: "Its my first post2", likeCounts: 5},
    ],
    newPostText: ''
}
export type  InitialStateType = typeof initialState
type ActionsType = AddPostActionType|UpdateNewPostTextActionType
const profileReducer=(state:InitialStateType =initialState, action:ActionsType):InitialStateType=>{
    switch (action.type) {
        case "ADD-POST":

            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCounts: 0
            }

            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newPostText}
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