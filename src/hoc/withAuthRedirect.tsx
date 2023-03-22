import React from "react";
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
export const withAuthRedirect = (Component: any) => {

  const RedirectComponent = (props: MapStateToPropsRedirectType) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return <Component {...props}/>
  }
  let ConnectedRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)

  return ConnectedRedirectComponent
}