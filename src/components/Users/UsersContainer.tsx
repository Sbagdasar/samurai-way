import {connect} from 'react-redux';
import {RootTypeReduxState} from '../../redux/redux-store';
import {Dispatch} from "redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, unFollow,
    UserType
} from "../../redux/reducers/users-reducer";
import React from 'react';
import axios from 'axios';
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {getUsers} from "../../api/api";
type MapStateToPropsType = {
    users: Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unFollow: (userID: number) => void,
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page:number)=>void
    setTotalUsersCount: (count:number)=>void
    toggleIsFetching:(isFetching:boolean)=>void

}
export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType;


class UsersContainer extends React.Component<UsersPropsType, RootTypeReduxState> {
    constructor(props: UsersPropsType) {
        super(props);

    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }
    getCurrentPageUsers=(page:number)=>{
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page)

        getUsers(this.props.pageSize, page)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {

        return <>
            {
                this.props.isFetching? <Preloader/>:null
            }
            <Users users={this.props.users}
                   getCurrentPageUsers={this.getCurrentPageUsers}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   follow={this.props.follow}
                   totalUsersCount={this.props.totalUsersCount}
                   unFollow={this.props.unFollow}/>
        </>

    }
}

const mapStateToProps = (state: RootTypeReduxState): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
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
let mapDispatchLikeObject:MapDispatchToPropsType = {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
}
//export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
export default connect(mapStateToProps, mapDispatchLikeObject)(UsersContainer)