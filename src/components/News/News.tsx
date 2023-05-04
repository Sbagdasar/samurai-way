import React from 'react';
import {useSelector} from "react-redux";
import {RootTypeReduxState, RootTypeStore} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

export const News = () => {
  let isAuth = useSelector<RootTypeReduxState, boolean>(state => state.auth.isAuth)

  if(!isAuth){
   return  <Redirect to={'/login'}/>
  }
    return (
        <div>
            news
        </div>
    );
};

