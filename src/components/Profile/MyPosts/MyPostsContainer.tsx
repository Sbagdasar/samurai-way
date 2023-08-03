import React from 'react';
import {MyPosts, PostType} from "components/Profile/MyPosts/MyPosts";
import {addPostActionCreator, ProfileItemPropsType} from "redux/reducers/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootTypeReduxState} from "redux/redux-store";



type MyPostsContainerPropsType = {
    profile: ProfileItemPropsType | null
    status: string
    updateStatusTC: (status: string) => void
}

export const MyPostsContainer = (props:MyPostsContainerPropsType) => {
  const dispatch = useDispatch()
  const posts = useSelector<RootTypeReduxState, PostType[]>(state => state.profilePage.posts)
  const addPostHandler = (newPost:string)=>{
    dispatch(addPostActionCreator(newPost))
  }
    return (
      <div>
          <MyPosts posts={posts} addPost={addPostHandler}/>
      </div>
    );
};

