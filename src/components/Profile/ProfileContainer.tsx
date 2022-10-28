import React from 'react';
import {Profile} from "./Profile";
import {RootTypeReduxState} from "../../redux/redux-store";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileItemPropsType, setUserProfile} from "../../redux/reducers/profile-reducer";

export type MapStateToPropsType ={
    profile:ProfileItemPropsType|null
}
type MapDispatchToPropsType ={
    setUserProfile:(profile:ProfileItemPropsType)=>void
}
type ProfileContainerType = MapStateToPropsType&MapDispatchToPropsType
class ProfileContainer extends React.Component<ProfileContainerType, RootTypeReduxState> {
constructor(props:ProfileContainerType) {
    super(props);
}
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
};
const mapStateToProps =(state:RootTypeReduxState):MapStateToPropsType=> ({
    profile:state.profilePage.profile

})
export default connect(mapStateToProps,{setUserProfile})(ProfileContainer);