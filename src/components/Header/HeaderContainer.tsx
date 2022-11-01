import React from "react";
import {RootTypeReduxState} from "../../redux/redux-store";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/reducers/auth-reducer";
import {ProfileItemPropsType, setUserProfile} from "../../redux/reducers/profile-reducer";

type HeaderContainerPropsType = MapStateToPropsType&MapDispatchToPropsType&{}

class HeaderContainer extends React.Component<HeaderContainerPropsType, RootTypeReduxState> {
    constructor(props: HeaderContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                const {id, login, email} = response.data.data
                this.props.setAuthUserData(id, login,email)
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response => {
                    this.props.setUserProfile(response.data.profile)
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
    profilePhoto:string|undefined
}
type MapDispatchToPropsType = {
    setAuthUserData: (id:number, login:string, email:string) => void,
    setUserProfile:(profile:ProfileItemPropsType)=>void
}
const mapStateToProps = (state: RootTypeReduxState): MapStateToPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    profilePhoto:state.profilePage.profile?.photos.small
})
export default connect(mapStateToProps, {setAuthUserData, setUserProfile})(HeaderContainer)