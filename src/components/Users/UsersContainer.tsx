import {connect} from 'react-redux';
import {RootTypeReduxState} from '../../redux/redux-store';
import {
    follow, followTC, getUsersTC,
    setCurrentPage, unFollow, unfollowTC,
    UserType
} from "../../redux/reducers/users-reducer";
import React from 'react';
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unFollow: (userID: number) => void,
    setCurrentPage: (page: number) => void
    getUsersTC: (pageSize: number, currentPage: number) => void
    followTC:(id:number)=>void
    unfollowTC:(id:number)=>void
}
export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType;


class UsersContainer extends React.Component<UsersPropsType, RootTypeReduxState> {

    constructor(props: UsersPropsType) {
        super(props);

    }

    componentDidMount() {
        this.props.getUsersTC(this.props.pageSize, this.props.currentPage)
    }

    getCurrentPageUsers = (page: number) => {
        this.props.getUsersTC(this.props.pageSize, page)

    }

    render() {

        return <>
            {
                this.props.isFetching ? <Preloader/> : null
            }
            <Users users={this.props.users}
                   getCurrentPageUsers={this.getCurrentPageUsers}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   followingInProgress={this.props.followingInProgress}
                   followTC={this.props.followTC}
                   unfollowTC={this.props.unfollowTC}
                   />
        </>

    }
}

const mapStateToProps = (state: RootTypeReduxState): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
/*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch((followAC(userID)))
        },
        unfollow: (userID: number) => {
            dispatch((unFollowAC(userID)))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch((setUsersAC(users)))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (count: number) => {
            dispatch(setTotalUsersCountAC(count))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }

    }
}*/
// change AC names followAC --> follow, and correcting imports
let mapDispatchLikeObject: MapDispatchToPropsType = {
    follow,
    unFollow,
    setCurrentPage,
    //toggleFollowingInProgress,
    getUsersTC,
    followTC,
    unfollowTC
}
//export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchLikeObject), withAuthRedirect, withRouter)(UsersContainer)