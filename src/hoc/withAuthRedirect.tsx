import React, {ComponentType} from "react";
import {RootTypeReduxState} from "../redux/redux-store";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

type MapStateToPropsRedirectType = {
  isAuth: boolean
}
const mapStateToPropsRedirect = (state: RootTypeReduxState): MapStateToPropsRedirectType => {
  return {
    isAuth: state.auth.isAuth
  }
}
export function withAuthRedirect<T>(Component: ComponentType<T>) {

  const RedirectComponent = (props: MapStateToPropsRedirectType) => {
    let {isAuth, ...restProps} = props
    if (!isAuth) return <Redirect to={'/login'}/>
    return <Component {...restProps as T}/>
  }
  return connect(mapStateToPropsRedirect)(RedirectComponent)
}