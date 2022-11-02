import React from "react";
import {RootTypeReduxState} from "../../redux/redux-store";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/reducers/auth-reducer";
import {ProfileItemPropsType, setUserProfile} from "../../redux/reducers/profile-reducer";
import {profileAPI} from "../../api/api";

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & {}

class HeaderContainer extends React.Component<HeaderContainerPropsType, RootTypeReduxState> {
    constructor(props: HeaderContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        profileAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data
                this.props.setAuthUserData(id, login, email)
                profileAPI.getProfile(id).then(data => {
                    this.props.setUserProfile(data.profile)
                })
            }
        })
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
    setAuthUserData: (id: number, login: string, email: string) => void,
    setUserProfile: (profile: ProfileItemPropsType) => void
}
const mapStateToProps = (state: RootTypeReduxState): MapStateToPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    profilePhoto: state.profilePage.profile?.photos.small
})
export default connect(mapStateToProps, {setAuthUserData, setUserProfile})(HeaderContainer)