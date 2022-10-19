import {connect} from "react-redux";
import {Users} from "./Users";
import {RootTypeReduxState} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/reducers/users-reducer";

type MapStateToPropsType = {
    users: Array<UserType>
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: Array<UserType>) => void

}
export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType;

const mapStateToProps = (state: RootTypeReduxState): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch((followAC(userID)))
        },
        unfollow: (userID: number) => {
            dispatch((unFollowAC(userID)))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch((setUsersAC(users)))
        }

    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)