import React from "react";
import {RootTypeReduxState} from "../../redux/redux-store";
import {Header} from "./Header";
import {connect} from "react-redux";
import {authMeTC, logoutTC, setAuthUserData} from "../../redux/reducers/auth-reducer";
import {ProfileItemPropsType, setUserProfile} from "../../redux/reducers/profile-reducer";

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & {}

class HeaderContainer extends React.Component<HeaderContainerPropsType, RootTypeReduxState> {
  constructor(props: HeaderContainerPropsType) {
    super(props);
  }

  componentDidMount() {
    this.props.authMeTC()
  }

  render() {
    return <Header {...this.props}/>
  }
}

type MapStateToPropsType = {
  login: string | null,
  isAuth: boolean
  profilePhoto: string | undefined
}
type MapDispatchToPropsType = {
  setAuthUserData: (id: number | null, login: string | null, email: string | null, isAuth: boolean) => void,
  setUserProfile: (profile: ProfileItemPropsType) => void
  authMeTC: () => void
  logoutTC: () => void
}
const mapStateToProps = (state: RootTypeReduxState): MapStateToPropsType => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  profilePhoto: state.profilePage.profile?.photos.small
})
export default connect(mapStateToProps, {setAuthUserData, setUserProfile, authMeTC, logoutTC})(HeaderContainer)