import {connect} from "react-redux";
import {Users} from "./Users";
import {RootTypeReduxState} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/reducers/users-reducer";

type MapStateToPropsType = {
    users:Array<UserType>
}
const mapStateToProps=(state:RootTypeReduxState):MapStateToPropsType=>{
    return{
        users: state.usersPage.users
    }
}
const mapDispatchToProps=(dispatch:Dispatch)=>{
    return {
        follow:(userID:number)=>{
            dispatch((followAC(userID)))
        },
        unfollow:(userID:number)=>{
            dispatch((unFollowAC(userID)))
        },
        setUsersAC:(users:Array<UserType>)=>{
            dispatch((setUsersAC(users)))
        }

    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)