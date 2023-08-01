import React from 'react';
import {Profile} from "./Profile";
import {RootTypeReduxState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getProfileTC, getStatusTC, ProfileItemPropsType, updateStatusTC} from "../../redux/reducers/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type MapStateToPropsType = {
  profile: ProfileItemPropsType | null
  status: string
  authorizedUserId: number | null
  isAuth: boolean
}
type MapDispatchToPropsType = {
  //setUserProfile: (profile: ProfileItemPropsType) => void
  getProfileTC: (userId: string) => void
  getStatusTC: (userId: string) => void
  updateStatusTC: (status: string) => void
}
type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

type PathParamsType = {
  userId: string
}

type DataContainerComponentType = RouteComponentProps<PathParamsType> & ProfileContainerType

class ProfileContainer extends React.Component<DataContainerComponentType> {
  constructor(props: DataContainerComponentType) {
    super(props);
  }

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId + ''
    }
    this.props.getProfileTC(userId)
    this.props.getStatusTC(userId)
  }

  render() {

    return (
      <Profile {...this.props}/>
    )
  }
};
const mapStateToProps = (state: RootTypeReduxState): MapStateToPropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(connect(mapStateToProps, {
  getProfileTC,
  getStatusTC,
  updateStatusTC
}), withAuthRedirect, withRouter)(ProfileContainer)
