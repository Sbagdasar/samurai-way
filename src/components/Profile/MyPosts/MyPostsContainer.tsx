import React from 'react';

import {addPostActionCreator} from "../../../redux/reducers/profile-reducer";
import {RootTypeReduxState} from "../../../redux/redux-store";
import {MyPosts, PostType} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from 'redux';


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
}
type MapDispatchToPropsType = {
    addPost:(newPost:string)=>void,
}
const mapStateToProps=(state:RootTypeReduxState):MapStateToPropsType=>{
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps=(dispatch: Dispatch):MapDispatchToPropsType=>{
    return{
        addPost:(newPost:string)=>{dispatch(addPostActionCreator(newPost))},

    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)