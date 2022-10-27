import {connect} from 'react-redux';
import {RootTypeReduxState} from '../../redux/redux-store';
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unFollowAC,
    UserType
} from "../../redux/reducers/users-reducer";
import React from 'react';
import axios from 'axios';
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
type MapStateToPropsType = {
    users: Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    getCurrentPageUsers=(page:number)=>{
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
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
                   unfollow={this.props.unfollow}/>
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
        },
        setCurrentPage:(page:number)=>{
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount:(count:number)=>{
            dispatch(setTotalUsersCountAC(count))
        },
        toggleIsFetching:(isFetching:boolean)=>{
            dispatch(toggleIsFetchingAC(isFetching))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)