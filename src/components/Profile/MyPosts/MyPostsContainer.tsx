import React from 'react';

import {addPostActionCreator, updateNewPostTextAC} from "../../../redux/reducers/profile-reducer";
import {RootTypeReduxState} from "../../../redux/redux-store";
import {MyPosts, PostType} from "./MyPosts";
import {connect} from "react-redux";
import { Dispatch } from 'redux';


// export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store)=>{
//                 let state = store.getState()
//                 const addPost = () => {
//
//                     store.dispatch(addPostActionCreator())
//                 }
//                 const onChangeHandler = (text:string) => {
//
//                  store.dispatch(updateNewPostTextAC(text))
//                 }
//                 return (
//                     <MyPosts posts={state.profilePage.posts}
//                              newPostText={state.profilePage.newPostText}
//                              addPost={addPost}
//                              updateNewPostText={onChangeHandler}
//                     />
//                 )
//
//             }}
//         </StoreContext.Consumer>
//
//     );
// };

type MapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost:()=>void,
    updateNewPostText:(text:string) => void
}
const mapStateToProps=(state:RootTypeReduxState):MapStateToPropsType=>{
    return {
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

const mapDispatchToProps=(dispatch: Dispatch):MapDispatchToPropsType=>{
    return{
        addPost:()=>{dispatch(addPostActionCreator())},
        updateNewPostText:(text:string) => {

            dispatch(updateNewPostTextAC(text))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)