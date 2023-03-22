import React from 'react';
import {Profile} from "./Profile";
import {RootTypeReduxState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getProfileTC, ProfileItemPropsType, setUserProfile} from "../../redux/reducers/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

export type MapStateToPropsType = {
    profile: ProfileItemPropsType | null
    isAuth:boolean
}
type MapDispatchToPropsType = {
    //setUserProfile: (profile: ProfileItemPropsType) => void
    getProfileTC: (userId: string) => void
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
            userId = "2"
        }
        this.props.getProfileTC(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <Profile {...this.props}/>
        )
    }
};
const mapStateToProps = (state: RootTypeReduxState): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})
const profileContainerWithRouter = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getProfileTC})(profileContainerWithRouter);